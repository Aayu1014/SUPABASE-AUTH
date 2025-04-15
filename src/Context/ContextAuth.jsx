import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../SupabaseClient";
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(undefined);
  //Signup
  const signUpNewUser = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      console.log("Error signing up:", error);
      return { sucess: false, error };
    } else {
      console.log("Sign up successful:", data);
      return { sucess: true, data };
    }
  };
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  //SignIn
  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        console.log("Error signing in:", error);
        return { success: false, error: error.message };
      }
      console.log("Sign in successful:", data);
      return { success: true, data };
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };

  //Signout
  const signOut = () => {
    const { error } = supabase.auth.signOut();
    if (error) {
      console.log("Error signing out:", error);
    } else {
      setSession(null);
    }
  };
  return (
    <AuthContext.Provider value={{ session, signUpNewUser, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export const userAuth = () => {
  return useContext(AuthContext);
};
