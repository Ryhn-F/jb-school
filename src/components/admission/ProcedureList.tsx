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

// Figma "5.Admission" (desktop + mobile frames): sizes are px in a 1080px frame, so sizes are cqw of the section;
// mobile text uses max() floors to stay readable on phones. calc() leadings keep the old text-sm/3xl line-heights so desktop is unchanged.
const headingClass =
  "font-sans text-[max(13px,1.51cqw)] leading-[calc(1.25/0.875)] font-bold tracking-[0.15em] lg:text-[1.48cqw]";
const listClass =
  "mt-[2.2cqw] list-disc pl-[max(20px,2.8cqw)] font-sans text-[max(13px,1.56cqw)] leading-[1.41] tracking-[0.1em] lg:pl-[1.9cqw] lg:text-justify lg:text-[1.57cqw]";

export function ProcedureList() {
  return (
    <section
      className="@container bg-white pt-[3cqw] pb-[4.9cqw] text-black lg:pb-[2cqw]"
      aria-labelledby="admission-procedure-title"
    >
      <header className="px-[5cqw] text-center lg:px-4 font-sans tracking-[0.1em]">
        <p className="text-[max(17px,2.02cqw)] font-bold lg:text-[1.67cqw]">ADMISSION</p>
        <h2
          id="admission-procedure-title"
          className="mt-[0.3cqw] text-[max(27px,3.28cqw)] leading-[1.2] font-bold lg:text-[3.15cqw]"
        >
          PROCEDURE
        </h2>
        <p className="mt-[2.6cqw] text-[max(13px,1.56cqw)] leading-[calc(1.25/0.875)] lg:text-[1.57cqw]">
          Kindly take a moment to read the information detail about the
          registration procedure:
        </p>
      </header>

      <div className="pr-[5.5cqw] pl-[5cqw] lg:pr-[5.4%] lg:pl-[5%]">
        <h3 className={`mt-[4.2cqw] lg:mt-[4.35cqw] ${headingClass}`}>REGISTRATION PROCEDURE :</h3>
        <ul className={listClass}>
          {REGISTRATION_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>

        <h3 className={`mt-[2.4cqw] lg:mt-[2.5cqw] ${headingClass}`}>GENERAL REGISTRATION DOCUMENTS :</h3>
        <ul className={listClass}>
          {REQUIRED_DOCUMENTS.map((doc) => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
