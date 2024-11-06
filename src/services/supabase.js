import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gzpsxjqercmbkcooyrrq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6cHN4anFlcmNtYmtjb295cnJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxMzEzMTEsImV4cCI6MjA0MzcwNzMxMX0.BtXZHkNlGmIMgdvf0685atZdZQoa1g8swx1mVpfoNe8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
