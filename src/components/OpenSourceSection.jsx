import GitHubCalendar from "react-github-calendar";

const OpenSourceSection = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold text-left mb-3">Opensource</h2>
      <div className="flex flex-wrap mb-8">
        <div className="rounded-3xl cursor-pointer w-full 2xl:w-fit border bg-card p-6">
          <div className="pb-6 text-sm">
            <div className="flex justify-between">
              <section>
                <img
                  src="/svg/github.svg"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="rounded-[10px] mb-2"
                />
                Syed Sameer
              </section>
              <a 
                href="https://github.com/syedsameerDEV" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="rounded text-xs font-bold mt-4 px-3 py-1 border border-border hover:bg-secondary transition-colors">
                  Follow
                </button>
              </a>
            </div>
          </div>
          <div className="pt-2 max-w-[500px]">
            <GitHubCalendar
              username="syedsameerdev"
              colorScheme="light"
              hideMonthLabels
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection; 