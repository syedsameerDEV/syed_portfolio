const SocialSection = () => {
  const socials = [
    // {
    //   id: 1,
    //   name: "X (Twitter)",
    //   handle: "@niurdhuuu",
    //   link: "https://x.com/nirudhuuu",
    //   logo: "/svg/twitter.svg",
    //   variant: "twitter",
    //   label: "Follow",
    // },
    {
      id: 2,
      name: "LinkedIn",
      handle: "SYED SAMEER",
      link: "https://www.linkedin.com/in/syed-sameer-574045254?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZN6O5OjOTaSQyitK49Bk9g%3D%3D",
      logo: "/svg/linkedin.svg",
      variant: "linkedin",
      label: "Connect",
    },
    {
      id: 3,
      name: "Instagram",
      handle: "syedsameer19980",
      link: "https://www.instagram.com/syedsameer19980/",
      logo: "/svg/instagram.svg",
      variant: "instagram",
      label: "Follow",
    },
    {
      id: 4,
      name: "Discord",
      handle: "Syed_sameer",
      link: "https://discord.com/channels/1383040587409784954/1383040589020270685",
      logo: "/svg/discord-icon.svg",
      variant: "discord",
      label: "Add Friend",
    },
  ];

  const getButtonStyle = (variant) => {
    const baseStyle =
      "rounded-full text-xs font-semibold px-4 py-2 transition-colors";

    switch (variant) {
      case "twitter":
        return `${baseStyle} bg-black text-white hover:bg-gray-800`;
      case "linkedin":
        return `${baseStyle} bg-blue-600 text-white hover:bg-blue-700`;
      case "instagram":
        return `${baseStyle} bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600`;
      case "discord":
        return `${baseStyle} bg-indigo-600 text-white hover:bg-indigo-700`;
      default:
        return `${baseStyle} bg-gray-600 text-white hover:bg-gray-700`;
    }
  };

  return (
    <section>
      <h2 className="text-xl font-semibold text-left mb-3">Socials</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        {socials.map((social) => (
          <div key={social.id} className="rounded-2xl w-48 border bg-card p-4">
            <div className="pb-0 text-sm">
              <img
                src={social.logo}
                alt={social.name}
                width={40}
                height={40}
                className="rounded-[10px] mb-2"
              />
              {social.name}
            </div>
            <div className="pt-2">
              <div className="pb-3 text-sm text-muted-foreground">
                {social.handle}
              </div>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <button className={getButtonStyle(social.variant)}>
                  {social.label}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialSection;
