import {
  Activity, ArrowRight, ArrowUpRight, Award, Baby, CalendarClock, CalendarDays,
  Check, CheckCircle2, ChevronDown, ChevronRight, ClipboardList, Clock, CreditCard,
  Dumbbell, Facebook, Heart, Instagram, LayoutGrid, ListChecks, Mail, MapPin,
  MessageCircle, Menu, Navigation, Phone, PhoneCall, Quote, Send, ShieldCheck,
  Sparkles, Star, Target, TrendingUp, Trophy, User, Users, Wind, X, Youtube,
  type LucideProps,
} from 'lucide-react'

const REGISTRY = {
  Activity, ArrowRight, ArrowUpRight, Award, Baby, CalendarClock, CalendarDays,
  Check, CheckCircle2, ChevronDown, ChevronRight, ClipboardList, Clock, CreditCard,
  Dumbbell, Facebook, Heart, Instagram, LayoutGrid, ListChecks, Mail, MapPin,
  MessageCircle, Menu, Navigation, Phone, PhoneCall, Quote, Send, ShieldCheck,
  Sparkles, Star, Target, TrendingUp, Trophy, User, Users, Wind, X, Youtube,
  Zap: Sparkles, // brand "energy" — reuse Sparkles for the Skill pillar
} as const

export type IconName = keyof typeof REGISTRY

interface IconProps extends LucideProps {
  name: IconName
}

/** Thin, tree-shakeable wrapper so data files can reference icons by name. */
export function Icon({ name, ...props }: IconProps) {
  const Cmp = REGISTRY[name]
  return <Cmp aria-hidden="true" {...props} />
}
