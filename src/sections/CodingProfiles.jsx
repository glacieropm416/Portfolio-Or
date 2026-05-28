const profiles = [
  {
    name: "LeetCode",
    desc: "Solved DSA problems and contest participation.",
    link: "https://leetcode.com/u/727823tucs019/"
  },
  {
    name: "GeeksforGeeks",
    desc: "Programming practice and coding challenges.",
    link: "https://www.geeksforgeeks.org/profile/727823txzh4?tab=overview"
  }
]

const CodingProfiles = () => {
  return (
    <section className="py-28 px-6">
      <h2 className="text-5xl font-bold text-center gradient-text mb-20">
        Coding Profiles
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {profiles.map((item, index) => (
          <div
            key={index}
            className="glass p-8 rounded-3xl text-center hover:scale-105 transition duration-300"
          >
            <h3 className="text-3xl font-bold text-cyan-400">
              {item.name}
            </h3>

            <p className="mt-4 text-gray-400">
              {item.desc}
            </p>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CodingProfiles