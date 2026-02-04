import { supabase } from './supabase';

/**
 * Service for handling form submissions to Supabase.
 */

export const submitToWaitlist = async (email: string) => {
  try {
    const { error } = await supabase
      .from('waitlist')
      .insert([{ email, source: 'unclutter_web' }]);
    
    if (error) throw error;
    
    // Fallback/Demo persistence for UX
    localStorage.setItem('unclutter_waitlist_submitted', 'true');
    return { success: true };
  } catch (err) {
    console.error('Waitlist submission failed:', err);
    // For demo purposes, we still allow a "success" state in local storage if keys are missing
    if (!import.meta.env.VITE_SUPABASE_URL) {
        localStorage.setItem('unclutter_waitlist_submitted', 'true');
        return { success: true, demo: true };
    }
    throw err;
  }
};

export const submitPreorder = async (email: string) => {
  try {
    const { error } = await supabase
      .from('preorders')
      .insert([{ email, source: 'unclutter_web' }]);
    
    if (error) throw error;

    localStorage.setItem('unclutter_preorder_submitted', 'true');
    return { success: true };
  } catch (err) {
    console.error('Pre-order submission failed:', err);
    if (!import.meta.env.VITE_SUPABASE_URL) {
        localStorage.setItem('unclutter_preorder_submitted', 'true');
        return { success: true, demo: true };
    }
    throw err;
  }
};

export const isAlreadyWaitlisted = () => {
    return localStorage.getItem('unclutter_waitlist_submitted') === 'true';
}

export const isAlreadyPreordered = () => {
    return localStorage.getItem('unclutter_preorder_submitted') === 'true';
}
