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

// Figma "5.Admission": sizes are px in a 1080px frame, so desktop sizes are cqw of the section.
const headingClass =
  "font-sans text-sm font-bold tracking-[0.15em] lg:text-[1.48cqw]";
const listClass =
  "list-disc pl-5 font-sans text-sm leading-[1.41] tracking-[0.1em] lg:mt-[2.2cqw] lg:pl-[1.9cqw] lg:text-justify lg:text-[1.57cqw]";

export function ProcedureList() {
  return (
    <section
      className="@container bg-white pt-8 pb-6 text-black lg:pt-[3cqw] lg:pb-[2cqw]"
      aria-labelledby="admission-procedure-title"
    >
      <header className="px-4 text-center font-sans tracking-[0.1em]">
        <p className="text-base font-bold lg:text-[1.67cqw]">ADMISSION</p>
        <h2
          id="admission-procedure-title"
          className="text-3xl font-bold lg:mt-[0.3cqw] lg:text-[3.15cqw]"
        >
          PROCEDURE
        </h2>
        <p className="mt-3 text-sm lg:mt-[2.6cqw] lg:text-[1.57cqw]">
          Kindly take a moment to read the information detail about the
          registration procedure:
        </p>
      </header>

      <div className="px-4 sm:px-6 lg:pr-[5.4%] lg:pl-[5%]">
        <h3 className={`mt-8 lg:mt-[4.35cqw] ${headingClass}`}>REGISTRATION PROCEDURE :</h3>
        <ul className={`mt-4 ${listClass}`}>
          {REGISTRATION_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>

        <h3 className={`mt-6 lg:mt-[2.5cqw] ${headingClass}`}>GENERAL REGISTRATION DOCUMENTS :</h3>
        <ul className={`mt-4 ${listClass}`}>
          {REQUIRED_DOCUMENTS.map((doc) => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
