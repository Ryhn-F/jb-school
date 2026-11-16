/** Senior High "Study Abroad" band: two columns of destination universities */
export function LevelStudyAbroad({ columns }: { columns: string[][] }) {
  return (
    <section
      className="@container bg-jb-indigo px-4 py-10 font-sans text-white sm:px-6 lg:px-0 lg:pt-[3.5vw] lg:pb-[3.1vw]"
      aria-labelledby="study-abroad-title"
    >
      <h2
        id="study-abroad-title"
        className="text-center text-xl font-bold tracking-[0.1em] lg:text-[1.85cqw]"
      >
        STUDY ABROAD
      </h2>
      <div className="mt-6 grid text-sm leading-[1.47] sm:grid-cols-2 lg:mt-[2.3cqw] lg:grid-cols-[35.74cqw_35.2cqw] lg:pl-[12.6%] lg:text-[1.39cqw]">
        {columns.map((column, i) => (
          <ul key={i} className="list-disc pl-[1.4em]">
            {column.map((university) => (
              <li key={university}>{university}</li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
