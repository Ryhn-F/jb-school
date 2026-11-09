const REGISTRATION_STEPS = [
  "The registration date will be announced via email, the JB School website, and social media channels.",
  "Kindly take a moment to read the information detail about the registration procedure",
  "Complete the required information in the application form.",
  "Entrance assessment will be scheduled; results will be communicated via email within two (2) weeks.",
  "Upon acceptance, proceed with the payment for registration, admission, Term 1 tuition, and the school package fees",
];

const REQUIRED_DOCUMENTS = [
  "Scan of both parents original ID Card",
  "Scan of the original Family Card containing the registered child’s data",
  "Scan of the original Birth Certificate issued by Indonesian Civil Registry Service Office and documents regarding name changing, issued by the government office (if any)",
  "Scan of the original immunization record",
  "Coloured photograph",
  "Scan of both parents original passport and valid KITAS/KITAP (foreign students only)",
  "Scan of child’s original passport and valid KITAS/KITAP (foreign students only)",
  "One (1) set of permit letter to study in Indonesia from the Ministry of Education, Culture, Research, and Technology – upon student’s acceptance (foreign students only)",
];

const listClass =
  "mt-4 list-disc space-y-0 pl-6 font-sans text-sm leading-[1.4] tracking-[0.095em] lg:mt-5 lg:text-justify lg:text-lg xl:text-[22px]";

export function ProcedureList() {
  return (
    <section className="bg-white py-10 lg:pt-8 lg:pb-12" aria-labelledby="admission-procedure-title">
      <div className="mx-auto max-w-7xl px-4 text-black sm:px-6 lg:px-8">
        <header className="text-center font-sans">
          <p className="text-base font-bold tracking-[0.09em] lg:text-xl xl:text-2xl">ADMISSION</p>
          <h2
            id="admission-procedure-title"
            className="text-3xl font-bold tracking-[0.09em] lg:text-4xl xl:text-[45px]"
          >
            PROCEDURE
          </h2>
          <p className="mt-3 text-sm tracking-[0.095em] lg:text-lg xl:text-[22px]">
            Kindly take a moment to read the information detail about the
            registration procedure:
          </p>
        </header>

        <h3 className="mt-8 font-sans text-sm font-bold tracking-[0.1em] lg:mt-9 lg:text-lg xl:text-[22px]">
          REGISTRATION PROCEDURE :
        </h3>
        <ul className={listClass}>
          {REGISTRATION_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>

        <h3 className="mt-6 font-sans text-sm font-bold tracking-[0.1em] lg:mt-8 lg:text-lg xl:text-[22px]">
          GENERAL REGISTRATION DOCUMENTS :
        </h3>
        <ul className={listClass}>
          {REQUIRED_DOCUMENTS.map((doc) => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>

        <div className="mt-6 text-center font-sans text-sm tracking-[0.095em] lg:mt-7 lg:text-lg xl:text-[22px]">
          <p>If you have a question please contact us at :</p>
          <p className="mt-3 lg:mt-4">
            Telp : <a href="tel:+62361752554" className="hover:text-jb-navy">(+62 361) 752554</a>,{" "}
            <a href="tel:+62361752776" className="hover:text-jb-navy">752776</a>, Fax : (+62 361)
            756235 Whatsapp :{" "}
            <a
              href="https://wa.me/6281138816881"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-jb-navy"
            >
              081138816881
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
