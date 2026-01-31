import jwMarriotImage1 from '../assets/images/events/jw_marriot/1765442696062.jpg'
import jwMarriotImage2 from '../assets/images/events/jw_marriot/1765442698706.jpg'
import jwMarriotImage3 from '../assets/images/events/jw_marriot/WhatsApp Image 2026-01-31 at 11.53.35.jpeg'
import btkImage1 from '../assets/images/events/btk/1.jpeg'
import btkImage2 from '../assets/images/events/btk/2.jpeg'

export type Event = {
  type: string
  title: string
  description: string
  date: string
  location: string
  status: string
  slug: string
  details: string
  images?: string[]
}

export const events: Event[] = [
  {
    type: 'Event',
    title: 'AWS Generative AI Experience Day',
    description: 'A recap of enterprise GenAI use cases, live demos, and a collaborative challenge.',
    date: 'Dec 4, 2025',
    location: 'JW Marriott Ankara, TR',
    status: 'Completed',
    slug: 'aws-generative-ai-experience-day',
    images: [jwMarriotImage1, jwMarriotImage2, jwMarriotImage3],
    details: `## AWS Generative AI Experience Day

We are delighted to share the success of our **AWS Generative AI Experience Day**, held on December 4th at JW Marriott Ankara in collaboration with AWS Türkiye.

With **120+ participants** from nearly **50 organizations**, we explored:

- Real-world enterprise use cases of Generative AI
- End-to-end demo development with AWS GenAI services
- Cross-industry success stories
- A live GenAI Challenge that brought great energy to the day

### Acknowledgments

A heartfelt thank you to all our guests for their engagement, to the AWS team for their valuable contributions, and to the entire Goaltech team for making this event possible.

### What's Next

This event marks only the beginning of our journey to help organizations build secure, scalable, and high-impact GenAI solutions. We look forward to continuing this momentum with upcoming events and tailored engagements.`,
  },
  {
    type: 'Fair',
    title: 'Kamu Bilişim Derneği – Kamu Dijital Dönüşüm Zirvesi',
    description:
      'Presented at our AWS partner booth for government organizations at the digital transformation summit.',
    date: 'Jan 14–15, 2026',
    location: 'BTK Ankara, TR',
    status: 'Completed',
    slug: 'kamu-bilisim-dernegi-kamu-dijital-donusum-zirvesi',
    images: [btkImage1, btkImage2],
    details: `## Kamu Digital Transformation Summit (Kamu Bilişim Derneği)

2 days, 1,000+ participants, 50+ speakers, 50+ projects: the Digital Türkiye vision came together in Ankara! 🏛️🚀

Held on January 14–15 at BTK Ankara, the Kamu Digital Transformation Summit once again showcased the immense energy of the public-sector IT ecosystem.

### Summit Highlights

- 🗓️ 2 packed days
- 👥 1,000+ participants
- 🎤 50+ speakers
- 🛠️ 50+ implemented project presentations
- 📂 8 thematic sessions

From AI and cybersecurity to smart cities and digital career opportunities, we explored the future of public administration from every angle. Bringing together stakeholders from both the public and private sectors is our strongest motivation for a more resilient and digital tomorrow.

Thank you to all our partners, speakers, and the thousands of attendees who filled the halls and contributed to this shared vision. ✨`,
  },
]
