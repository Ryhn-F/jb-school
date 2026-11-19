/** Senior High "Study Abroad" band: two columns of destination universities */
export function LevelStudyAbroad({ columns }: { columns: string[][] }) {
  return (
    <section
      className="@container bg-jb-indigo pt-[3.5vw] pb-[4.6vw] font-sans text-white lg:pb-[3.1vw]"
      aria-labelledby="study-abroad-title"
    >
      <h2
        id="study-abroad-title"
        className="text-center text-[2.14vw] leading-[1.4] font-bold tracking-[0.1em] lg:text-[1.85cqw]"
      >
        STUDY ABROAD
      </h2>
      <div className="mt-[2.7vw] grid grid-cols-[40.3vw_1fr] pr-[4vw] pl-[9.4vw] text-[1.57vw] leading-[1.41] tracking-[0.012em] lg:mt-[2.3cqw] lg:grid-cols-[35.74cqw_35.2cqw] lg:pr-0 lg:pl-[12.6%] lg:text-[1.39cqw] lg:leading-[1.47] lg:tracking-normal">
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
