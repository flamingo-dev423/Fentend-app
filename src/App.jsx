"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { ThemeProvider } from "next-themes"
import { ThemeToggle } from "@/components/theme-toggle"
// import { useTheme } from "next-themes"
import { Palette, Globe, Smartphone, Star, ChevronRight, Mail, MapPin } from "lucide-react"
// import Image from "next/image"
import emailjs from "@emailjs/browser"
import logo from "@/assets/images/logo.svg"
import headerImg from "@/assets/images/header-image.png"
import workimg from "@/assets/images/work1.png"
import workimg2 from "@/assets/images/work2.png"
import workimg3 from "@/assets/images/work3.jpg"
import workimg4 from "@/assets/images/work4.PNG"
import workimg5 from "@/assets/images/work5.jpg"


export default function LandingPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
    }

    try {
      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.send(
        "service_yay28qo",
        "template_3j6fpk6",
        templateParams,
        "ECCGLRnAcEY1FZpIM"
      )

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      })

      form.reset()
      setIsContactOpen(false)
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="min-h-screen md:mx-10 bg-background text-foreground">
        {/* Header */}
        <header className="border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Logo"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="font-bold text-xl">Fentend</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#faq" className="hover:text-blue-600 transition-colors">
                FAQ
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 rounded-full hover:bg-blue-700">Contact Us</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Get in Touch</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" name="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" type="tel" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" name="company" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" name="message" rows={4} required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="py-20 lg:py-30">
          <div className="container mx-auto px-4">
            {/* <div className="grid lg:grid-cols-2 gap-12 items-center"> */}
            <div className="space-y-8 mx-auto mb-10 max-w-2xl">
              <h1 className="text-4xl lg:text-5xl text-center font-bold leading-tight">
                RE: Inventing a Better IT Solutions as Service for your Business.
              </h1>
            </div>
            <div className="relative w-full lg:h-[500px] rounded-lg overflow-hidden lg:block">
              <img
                src={headerImg}
                alt="Team collaboration"
                className="object-cover" />
            </div>
            {/* </div> */}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="pt-2 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-40">
              {/* Left: Badge */}
              <div className="shrink-0">
                <Badge variant="outline" className="px-4 py-3 rounded-full w-fit">
                  About us
                </Badge>
              </div>

              {/* Right: Heading and Paragraph */}
              <div className="space-y-6 max-w-4xl">
                <h2 className="text-3xl lg:text-5xl font-bold">
                  WE ARE A FULL SERVICE SOFTWARE COMPANY WITH MANY YEARS OF EXPERIENCE
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We solve all brand’s business problems in the internet space, as well as develop and adapt business tools.
                  We locate your customers online and set up effective digital communication channels.
                  We offer all of the services required for your business to operate online.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-16 border-t" style={{ borderTopWidth: '1.5px', borderColor: '#d9d9d9' }} />


        {/* Services Section */}
        <section id="services" className="py-10 lg:py-20">
          <div className="container mx-auto px-4 space-y-16">
            {/* Top: Badge and Paragraph side by side */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              {/* Badge */}
              <div className="shrink-0 ">
                <Button variant="outline" size="lg" className="px-4 py-3 rounded-full w-fit">
                  Our Services <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Intro Text */}
              <div className="text-muted-foreground text-base max-w-3xl">
                Fentend is a full IT solution service agency working to provide innovative IT solutions to clients
                from various industries including banking, finance, insurance etc.
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card className="p-8 text-left hover:shadow-lg transition-shadow">
                <CardContent className="space-y-6">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center">
                    <Palette className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">UI/UX DESIGN</h3>
                  <p className="text-muted-foreground">
                    We craft digital solutions that solve your brand’s business challenges both online and beyond. From user-centric interfaces to powerful business tools to help reach your audience.
                  </p>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="p-8 text-left hover:shadow-lg transition-shadow">
                <CardContent className="space-y-6">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Web Development</h3>
                  <p className="text-muted-foreground">
                    We build smart, scalable web solutions that tackle your brand’s business challenges online. From custom websites to integrated business tools, we help you connect with your customers.
                  </p>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="p-8 text-left hover:shadow-lg transition-shadow">
                <CardContent className="space-y-6">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">App Development</h3>
                  <p className="text-muted-foreground">
                    We design and develop mobile apps that solve real business problems and drive growth. From powerful features to intuitive user experiences, we equip your brand with tools that reach customers.
                  </p>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Latest Work Section */}
        <section className="py-20 lg:mx-10 rounded-none lg:rounded-2xl bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Our Work
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">OUR LATEST WORK</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Created by a full IT solution service agency working to provide innovative IT solutions to clients from
                various industries including banking, finance, insurance etc.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="overflow-hidden border-none">
                <div className="relative">
                  <img
                    src={workimg}
                    alt="RENTEASE Mobile Application"
                    className="object-contain"
                  />
                </div>
                <CardContent className="p-7 bg-blue-600 ">
                  <h3 className="font-bold text-lg mb-2 text-white">RENTEASE - Mobile Application</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none">
                <div className="relative">
                  <img
                    src={workimg2}
                    alt="Epidemic Sound Web Application"
                    className="object-contain"
                  />
                </div>
                <CardContent className="p-7 bg-blue-600">
                  <h3 className="font-bold text-lg mb-2 text-white">Epidemic Sound - Web Application</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-10 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-40">
              <div className="shrink-0">
                <Badge variant="outline" className="px-4 py-3 rounded-full w-fit">
                  Our Team
                </Badge>
              </div>
              <div className="space-y-6 max-w-4xl">
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Fentend is a full IT solution service agency working to provide innovative IT solutions to clients from
                  various industries including banking, finance, insurance etc.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 mt-0 lg:mt-20 gap-8 max-w-5xl mx-auto">
              {[
                { img: workimg4, name: "Obafemi", description: "CEO & Business Strategist" },
                { img: workimg3, name: "Raphael George", description: "Product Designer & Frontend Engineer" },
                { img: workimg5, name: "Gabriel Ochai", description: "App Developer & Backend Engineer" },
              ].map((client, index) => (
                <div key={index} className="text-left">
                  {/* Card with full image */}
                  <Card className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={client.img}
                      alt={client.name}
                      className="w-full h-64 object-cover"
                    />
                  </Card>

                  {/* Name and description outside the card */}
                  <h3 className="font-bold text-lg mt-4 mb-1">{client.name}</h3>
                  <p className="text-muted-foreground text-sm">{client.description}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-5xl mx-auto p-8 lg:p-12">
              <div className="space-y-10">
                {/* Top Row with Badge and Heading */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-40">
                  <div className="shrink-0">
                    <Badge variant="outline" className="px-4 py-3 rounded-full w-fit">
                      Testimonial
                    </Badge>
                  </div>
                  <div className="space-y-6 max-w-2xl mx-auto">
                    <h6 className="text-xl lg:text-2xl font-medium leading-relaxed">
                      Fentend is a full IT solution service agency working to provide innovative IT solutions to clients
                      from various industries including banking, finance, insurance etc.
                    </h6>
                  </div>
                </div>

                {/* Scrollable Testimonial Carousel */}
                <div className="overflow-x-auto">
                  <div className="flex space-x-6 snap-x snap-mandatory pb-4">
                    {[
                      {
                        name: "Bright Themes",
                        feedback: [
                          "Consultant to give Business & Co-ordinator. They provide high-tech web and mobile",
                          "development services to help support of the company different goals and objectives",
                        ],
                        rating: 5,
                      },
                      {
                        name: "Sarah Lee",
                        feedback: [
                          "The team was professional, creative, and communicative. I’d definitely work with them again!",
                        ],
                        rating: 5,
                      },
                      {
                        name: "David Stone",
                        feedback: [
                          "Excellent work! They delivered on time and exceeded expectations in design and development.",
                        ],
                        rating: 4,
                      },
                      {
                        name: "John Doe",
                        feedback: [
                          "Excellent work! They delivered on time and exceeded expectations in design and development.",
                        ],
                        rating: 4,
                      },
                    ].map((testimonial, index) => (
                      <div
                        key={index}
                        className="min-w-[300px] max-w-sm bg-muted/20 rounded-lg p-6 snap-center"
                      >
                        <div className="space-y-2 mb-4">
                          <p className="font-semibold">{testimonial.name}</p>
                          {testimonial.feedback.map((line, i) => (
                            <p key={i} className="text-muted-foreground text-sm">
                              {line}
                            </p>
                          ))}
                        </div>
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                                }`}
                            />
                          ))}
                        </div>
                        <p className="font-semibold text-sm text-gray-700">Expert Rating</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>


        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                FAQ
              </Badge>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Fentend is a full IT solution service agency working to provide innovative IT solutions to clients from
                various industries including banking, finance, insurance etc.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">What services does Fentend offer?</AccordionTrigger>
                  <AccordionContent>
                    Fentend provides end-to-end IT solutions including web and mobile app development, cloud services, enterprise software, UI/UX design, and business process automation tailored to meet your specific needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">Can Fentend build custom solutions for my business?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely. We specialize in building custom software and applications that align with your brand’s goals, whether it's a startup MVP or a large-scale enterprise system.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">Do you provide ongoing support after development?</AccordionTrigger>
                  <AccordionContent>
                    Yes, Fentend offers post-launch support, maintenance, and scaling services to ensure your digital products stay optimized, secure, and up-to-date.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">What industries do you work with?</AccordionTrigger>
                  <AccordionContent>
                    We work across various industries including fintech, healthcare, logistics, education, retail, and more—delivering tailored solutions that solve specific business challenges.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">How long does it take to complete a typical project?</AccordionTrigger>
                  <AccordionContent>
                    Project timelines vary based on complexity, but most engagements range from 4 weeks for MVPs to several months for enterprise systems. We follow an agile process to ensure clarity and flexibility throughout.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">Does Fentend help with UI/UX design?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Our in-house designers create user-centered designs that not only look great but also enhance usability, engagement, and conversion across web and mobile platforms.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">Can I request a consultation before starting a project?</AccordionTrigger>
                  <AccordionContent>
                    Of course. We offer free consultations to understand your goals, assess your current systems, and propose a roadmap for how we can help.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">Do you work with startups and enterprise companies alike?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Whether you're a startup looking to launch your first product or an enterprise optimizing legacy systems, Fentend adapts our approach to meet your scale and budget.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-20">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-8 h-8 rounded-lg object-cover"
                  />
                  <span className="font-bold text-xl">Fentend</span>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>fentendmarkettech@gmail.com</span>
                  </div>
                  <div className="flex pt-6 items-start space-x-2">
                    <MapPin className="h-4 w-4 mt-0.5" />
                    <span>2 old yaba road, Adekunle bus-stop, Yaba, Lagos state</span>
                  </div>
                </div>
              </div>

              {/* <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Our Story</div>
                <div>Careers</div>
                <div>Contact</div>
                <div>Blog</div>
              </div>
            </div> */}

              <div className="space-y-4">
                <h3 className="font-semibold">Product</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Our FAQs</div>
                  <div>Pricing</div>
                  <div>Services</div>
                  <div>About</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Support</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Help Center</div>
                  <div>Contact Us</div>
                  <div>Privacy Policy</div>
                  <div>Terms of Service</div>
                </div>
              </div>
            </div>

            <div className="border-t border-border/40 mt-12 pt-8 text-center text-sm text-muted-foreground">
              <p>Copyright 2025 Fentend</p>
            </div>
          </div>
        </footer>
      </div>
    // </ThemeProvider>
  )
}
