import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://vkmovazzjczadtxzmiwl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbW92YXp6amN6YWR0eHptaXdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0Njk3OTYsImV4cCI6MjAwNTA0NTc5Nn0.P8QcY12QjPSkvfXM4CAQk3qgBlmm1iM5C9fXv8zTLd0'
const supabase = createClient(supabaseUrl, supabaseKey)


supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})

export default function useSupabase () {
  return { supabase }
}
