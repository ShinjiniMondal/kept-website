export interface WaitlistSubmission {
  name: string;
  email: string;
  commitmentGoal?: string;
  createdAt: string;
}

export async function submitWaitlistEntry(entry: {
  name: string;
  email: string;
  commitmentGoal?: string;
}): Promise<{ success: boolean; message: string }> {
  // Simulate network latency for realistic feel
  await new Promise((resolve) => setTimeout(resolve, 800));

  const newEntry: WaitlistSubmission = {
    ...entry,
    createdAt: new Date().toISOString(),
  };

  try {
    // Store in localStorage for demo persistence
    const existingStr = typeof window !== 'undefined' ? localStorage.getItem('kept_waitlist') : null;
    const existing: WaitlistSubmission[] = existingStr ? JSON.parse(existingStr) : [];
    
    // Check duplicate email
    if (existing.some((item) => item.email.toLowerCase() === entry.email.toLowerCase())) {
      return {
        success: true,
        message: "You're already on the Kept VIP waitlist! We'll notify you as soon as early access opens.",
      };
    }

    existing.push(newEntry);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kept_waitlist', JSON.stringify(existing));
    }

    /*
     * NOTE FOR PRODUCTION / BACKEND INTEGRATION:
     * To connect to Supabase, Resend, Firebase, or ConvertKit, replace this block:
     * 
     * example Supabase:
     * const { error } = await supabase.from('waitlist').insert([newEntry]);
     * 
     * example Resend/API Route:
     * const res = await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify(newEntry) });
     */

    return {
      success: true,
      message: "You've successfully joined the Kept early access list!",
    };
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return {
      success: true,
      message: "Welcome to Kept early access! We've recorded your commitment.",
    };
  }
}
