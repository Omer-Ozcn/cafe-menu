import Section from "../components/Section";
import { Mail, MapPin, Phone } from "lucide-react";

function ContactForm() {
  return (
    <form className="flex w-full max-w-xl flex-col gap-3 rounded-2xl bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-4 shadow">
      <div className="flex flex-col gap-1">
        <label className="text-sm text-neutral-800 dark:text-neutral-200">Ad Soyad</label>
        <input className="rounded-xl border border-neutral-300 px-3 py-2 text-sm dark:bg-neutral-800 dark:text-white" placeholder="Adınız" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-neutral-800 dark:text-neutral-200">E-posta</label>
        <input type="email" className="rounded-xl border border-neutral-300 px-3 py-2 text-sm dark:bg-neutral-800 dark:text-white" placeholder="ornek@mail.com" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-neutral-800 dark:text-neutral-200">Mesaj</label>
        <textarea rows={4} className="rounded-xl border border-neutral-300 px-3 py-2 text-sm dark:bg-neutral-800 dark:text-white" placeholder="Rezervasyon talebi veya sorunuz" />
      </div>
      <button type="button" className="mt-1 rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-neutral-900">
        Gönder
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <Section id="contact" title="İletişim" subtitle="Rezervasyon ve sorular için">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <ContactForm />
        <div className="flex flex-1 flex-col gap-3 rounded-2xl bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-4 shadow">
          <div className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
            <MapPin className="h-4 w-4" /> Fevzipaşa Cad. No: 6, İstanbul
          </div>
          <div className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
            <Phone className="h-4 w-4" /> 0 (212) 000 00 00
          </div>
          <div className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
            <Mail className="h-4 w-4" /> hello@genperia.com
          </div>
        </div>
      </div>
    </Section>
  );
}
