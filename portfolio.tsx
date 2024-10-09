import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Download, MapPin, Briefcase, GraduationCap, Code, User, Music, ShoppingBag, Car, Wifi, Swim, Badminton, Smartphone, Bike } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")

  const skills = [
    "Python", "R", "C", "C++", "Data Wrangling", "Pandas", "NumPy", "Keras", "PyTorch",
    "Data Visualization", "MS Excel", "Tableau", "Power BI", "Seaborn", "Machine Learning",
    "Arduino", "Node MCU", "Raspberry Pi", "SQL", "Team Collaboration", "Time Management",
    "Decision Making", "Communication", "Adaptability", "Project Management"
  ]

  const experiences = [
    {
      title: "Associate Software Engineer (Data Engineer)",
      company: "Sasken Technology Limited",
      period: "Aug 2022 to Jul 2023",
      responsibilities: [
        "Managed and optimized relational databases (e.g., MySQL) improving query performance by 30%.",
        "Implemented data modelling techniques to create efficient data structures, supporting analytics and reporting requirements, which improved data retrieval times by 25%.",
        "Monitored and ensured data quality and consistency across the pipeline, using validation and error-checking scripts, leading to a 20% reduction in data discrepancies.",
        "Worked with different libraries such as Pandas and NumPy In order to Pre-processing the Data for Exploratory Data Analysis."
      ]
    },
    {
      title: "Crew Member",
      company: "McDonald's",
      period: "Dec 2023 to Ongoing",
      responsibilities: [
        "Providing best customer service by Solving the quarries from the customers.",
        "Received Best customer service award on the first month of the joining.",
        "Received Start of the shift on the second month of joining.",
        "Maintaining the production in such a way that the shift doesn't crash."
      ]
    }
  ]

  const education = [
    {
      degree: "MSc Data Science",
      institution: "University of East London",
      period: "08/2023 - 08/2024",
      details: [
        "Relevant coursework: Quantitively Data analysis, Advanced machine learning, Data Visualization, R programming, Spatial Data analysis, Data science Ecology.",
        "Acquired knowledge of Various machine learning algorithm. And various data visualization techniques in R programming and excel.",
        "Data Extraction and filtering using SQL and MS Excel."
      ]
    },
    {
      degree: "B.E. Electronics and Communication Engineering",
      institution: "Dr.N.G.P. Institute of Technology",
      period: "07/2018 - 06/2022",
      details: [
        "Completed program with a CGPA of 8.10",
        "Relevant coursework: Problem solving and python programming, Basic electrical and Instrumental Engineering, Circuit Analysis, Control system engineering, Fundamentals of data structures in c Programming, Linear algebra and partial differential equations, Probability and random process, Communication Networks, Computer architecture and organization, Discrete-Time Signal processing, Antennas and microwave Engineering, Wireless networks, and Professional ethics in Engineering.",
        "Participated in the 24Hrs Hackathon and secured 4th place.",
        "Final Year Project: Plant disease detection using IoT and Image Processing",
        "Presented Final Year Project at National level symposium in PSG IT."
      ]
    }
  ]

  const additionalInfo = [
    "District level 3rd and 4th in yoga competition.",
    "Acquired a certificate in Masters in Data analytics by Simplilearn(2022)",
    "Acquired 1st place in simulated fastest line following robot contest conducted by KCT.",
    "Associate student secretary of Department of Electronics and Communication Engineering in Dr.N.G.P. Institute of Technology.",
    "Participated in 24hs coding competition (Hackathon) in DR N.G.P. Institute of Technology."
  ]

  const interests = [
    { icon: <Music className="w-4 h-4" />, text: "Listening to music" },
    { icon: <ShoppingBag className="w-4 h-4" />, text: "Shopping" },
    { icon: <Car className="w-4 h-4" />, text: "Long drives" },
    { icon: <Wifi className="w-4 h-4" />, text: "Internet browsing" },
    { icon: <Swim className="w-4 h-4" />, text: "Swimming" },
    { icon: <Badminton className="w-4 h-4" />, text: "Playing badminton" },
    { icon: <Smartphone className="w-4 h-4" />, text: "Using gadgets" },
    { icon: <Bike className="w-4 h-4" />, text: "Bike riding" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-gray-100">
      <header className="sticky top-0 backdrop-blur-md bg-gray-900/70 border-b border-gray-800 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Gokul Murali
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" onClick={() => setActiveTab("about")} className={`hover:text-blue-400 transition-colors ${activeTab === "about" ? "text-blue-400" : ""}`}>About</a></li>
              <li><a href="#skills" onClick={() => setActiveTab("skills")} className={`hover:text-blue-400 transition-colors ${activeTab === "skills" ? "text-blue-400" : ""}`}>Skills</a></li>
              <li><a href="#experience" onClick={() => setActiveTab("experience")} className={`hover:text-blue-400 transition-colors ${activeTab === "experience" ? "text-blue-400" : ""}`}>Experience</a></li>
              <li><a href="#education" onClick={() => setActiveTab("education")} className={`hover:text-blue-400 transition-colors ${activeTab === "education" ? "text-blue-400" : ""}`}>Education</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-24">
        <section id="about" className="text-center">
          <div className="flex justify-center items-center mb-8">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Gokul Murali"
              width={200}
              height={200}
              className="rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/50"
            />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Gokul Murali
          </h2>
          <p className="text-xl text-blue-300 mb-6">Software Engineer | Data Scientist</p>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            Software Engineer with a year of experience in Data Engineering and a strong understanding of Data Visualization and Data Science. Currently pursuing an MSc in Data Science, with a focus on Quantitative Data Analysis, Spatial Data Analysis, and Advanced Machine Learning.
          </p>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Badge variant="secondary" className="text-sm py-1 px-2 bg-blue-800 text-blue-300">
              <MapPin className="w-4 h-4 mr-1" />
              London, United Kingdom
            </Badge>
          </div>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" className="bg-blue-800 border-blue-600 hover:bg-blue-700">
              <Github className="h-5 w-5 text-blue-400" />
            </Button>
            <Button variant="outline" size="icon" className="bg-blue-800 border-blue-600 hover:bg-blue-700">
              <Linkedin className="h-5 w-5 text-blue-400" />
            </Button>
            <Button variant="outline" size="icon" className="bg-blue-800 border-blue-600 hover:bg-blue-700">
              <Mail className="h-5 w-5 text-blue-400" />
            </Button>
            <Button variant="outline" className="bg-blue-800 border-blue-600 hover:bg-blue-700 text-blue-400">
              <Download className="h-5 w-5 mr-2" />
              Resume
            </Button>
          </div>
        </section>

        <section id="skills">
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-blue-800 text-blue-300">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section id="experience">
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-blue-900/50 border-blue-800 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle 