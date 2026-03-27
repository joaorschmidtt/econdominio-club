import { createClient } from '@supabase/supabase-js'

// O "!" no final diz ao TypeScript que essas variáveis COM CERTEZA vão existir
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)