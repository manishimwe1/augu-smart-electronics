import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import {
  Monitor,
  Printer,
  Network,
  Camera,
  GraduationCap,
  Wrench,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Monitor,
      title: "Computer Repair & Maintenance",
      description: "Expert repair and maintenance for desktops, laptops, and all computer systems.",
    },
    {
      icon: Printer,
      title: "Printer & Photocopier Repair",
      description: "Professional repair services for all brands of printers and photocopiers.",
    },
    {
      icon: Network,
      title: "Networking & Internet Services",
      description: "Complete network setup, configuration, and troubleshooting services.",
    },
    {
      icon: Camera,
      title: "CCTV Installation",
      description: "Professional CCTV camera installation and security system setup.",
    },
    {
      icon: GraduationCap,
      title: "Training & Internship",
      description: "Professional training programs and internship opportunities in tech.",
    },
    {
      icon: Wrench,
      title: "General Tech Services",
      description: "Comprehensive technology solutions for all your electronic needs.",
    },
  ]

  const features = [
    "Experienced & certified technicians",
    "Fast turnaround time",
    "Affordable pricing",
    "Quality guaranteed",
    "On-site & remote support",
    "Emergency services available",
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium">
                  Kigali's Trusted Tech Solutions
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                  Professional Electronics & IT Solutions in Kigali
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                  Expert computer repair, CCTV installation, networking, and comprehensive technology services. Fast,
                  reliable, and affordable solutions for businesses and individuals across Rwanda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg">
                    <Link href="/contact">Request Service</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg bg-transparent">
                    <Link href="/services">View Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/professional-technology-repair-technician-working-.jpg"
                  alt="Professional tech repair services"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive technology solutions tailored to meet your needs
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img src="/modern-technology-repair-workshop-with-electronics.jpg" alt="AUGU workshop" className="object-cover w-full h-full" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose AUGU?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  AUGU Smart Electronic Service Ltd is Kigali's premier technology repair and installation company. With
                  years of experience and a team of certified technicians, we provide reliable, fast, and professional
                  tech solutions for businesses and individuals across Rwanda.
                </p>
                <div className="grid gap-3 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today for professional tech solutions. We're here to help with all your electronic and IT
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
              <div className="flex items-center gap-2 text-primary-foreground">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">+250 783 432 438</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-7 w-7" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-1">+250 783 432 438</p>
                  <p className="text-sm text-muted-foreground">0725 900 732</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-7 w-7" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground break-all">augstinech2015@gmail.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-7 w-7" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">Kigali – Nyarugenge</p>
                  <p className="text-sm text-muted-foreground">Norvege (Karama Kigali)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
