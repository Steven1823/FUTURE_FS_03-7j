import Image from "next/image"

export default function SocialCampaigns() {
  const campaigns = [
    {
      title: "#SoundStories",
      description:
        "User-generated content showing how specific songs transformed moments in their lives, with animated visualizers overlaid on their videos.",
      platform: "TikTok, Instagram",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Mood Mirrors",
      description:
        "Interactive filters that analyze facial expressions and recommend tracks/playlists that match or complement the user's current mood.",
      platform: "Instagram, Snapchat",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Sonic Fingerprints",
      description:
        "Personalized, animated visualizations of users' listening habits that can be shared as unique digital art pieces.",
      platform: "Instagram, X",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Genre Journeys",
      description:
        "Interactive stories that take users through the evolution of their favorite genres, with exclusive artist commentary.",
      platform: "Instagram Stories, TikTok",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Playlist Battles",
      description: "Community challenges where users create themed playlists and vote on the best curation.",
      platform: "TikTok, Instagram",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Behind The Stream",
      description:
        "Short-form content revealing surprising stats about global listening trends and unexpected connections between artists.",
      platform: "TikTok, Instagram Reels",
      image: "/placeholder.svg?height=300&width=600",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Social Media Campaigns</h2>
        <p className="text-gray-400">Engaging content themes that connect users through shared musical experiences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaigns.map((campaign, index) => (
          <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              <Image src={campaign.image || "/placeholder.svg"} alt={campaign.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white">{campaign.title}</h3>
                  <p className="text-sm text-[#1DB954]">{campaign.platform}</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm">{campaign.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-zinc-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Campaign Integration Strategy</h3>
        <p className="mb-4">
          These campaigns are designed to work together across platforms, creating a cohesive brand experience that
          encourages user participation and sharing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-zinc-700 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Discovery</h4>
            <p className="text-sm">
              Campaigns that help users discover new music based on their unique tastes and contexts
            </p>
          </div>
          <div className="bg-zinc-700 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Connection</h4>
            <p className="text-sm">Content that fosters community and shared experiences around music</p>
          </div>
          <div className="bg-zinc-700 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Expression</h4>
            <p className="text-sm">Tools that allow users to express their identity through their musical choices</p>
          </div>
        </div>
      </div>
    </div>
  )
}
