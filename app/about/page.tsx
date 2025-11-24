import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Target, Eye, Users, Clock, Shield, ThumbsUp } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We use only genuine parts and follow industry best practices to ensure lasting results.",
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick turnaround times without compromising on quality. We value your time.",
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified technicians with years of experience in electronics and IT services.",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "1000+", label: "Repairs Completed" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About AUGU</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Kigali's trusted partner for professional electronics repair and IT solutions
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img src="/professional-technology-repair-team-working-in-mod.jpg" alt="AUGU team" className="object-cover w-full h-full" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  AUGU Smart Electronic Service Ltd is a leading technology repair and installation company based in
                  Kigali, Rwanda. Established with a vision to provide reliable, fast, and professional tech solutions,
                  we have become the go-to service provider for individuals and businesses across the region.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Our team of certified technicians brings years of experience in computer repair, CCTV installation,
                  networking, and comprehensive IT services. We pride ourselves on our commitment to quality,
                  affordability, and customer satisfaction.
                </p>
                <p className="text-lg text-muted-foreground">
                  Whether you need emergency repairs, system installations, or professional training, AUGU is your
                  trusted partner for all technology-related needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Target className="h-7 w-7" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    To provide reliable, fast, and professional technology solutions that empower individuals and
                    businesses to leverage the full potential of their electronic devices and IT infrastructure.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-accent/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground">
                      <Eye className="h-7 w-7" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    To be Rwanda's most trusted and innovative technology service provider, known for excellence,
                    integrity, and commitment to customer success in every service we deliver.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <value.icon className="h-7 w-7" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AUGU by the Numbers</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose AUGU?</h2>
              <div className="space-y-4">
                {[
                  "Certified and experienced technicians",
                  "Use of genuine parts and quality materials",
                  "Competitive and transparent pricing",
                  "Fast turnaround time on all repairs",
                  "Comprehensive warranty on services",
                  "On-site and remote support options",
                  "Emergency services available 24/7",
                  "Professional training and internship programs",
                  "Customer-focused approach",
                  "Trusted by businesses and individuals across Kigali",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the AUGU difference. Contact us today for professional tech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
