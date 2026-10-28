import ClientStories from './ClientStories'
import ContactForm from './ContactForm'

function ContactSection() {
  return (
    <section
      className="relative z-10 w-full rounded-b-[36px] border-t border-slate-200 bg-linear-to-b from-white via-[#f8faff] to-[#eff4ff] pt-12 pb-24 shadow-[0_25px_50px_rgba(0,0,0,0.45)]"
      id="client-stories-contact"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.06),0_4px_20px_-2px_rgba(37,99,235,0.04)] md:rounded-4xl">
          <div className="grid w-full grid-cols-1 lg:grid-cols-12">
            <ClientStories />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
