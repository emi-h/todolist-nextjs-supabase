import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;
const client = createClient(supabaseUrl, supabaseKey);

export { client as supabaseClient };
