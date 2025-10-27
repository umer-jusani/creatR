"use client";
import Animation from "@/components/animation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { features, platformTabs, socialProofStats, testimonials } from "@/lib/data";
import { ArrowRightIcon, CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">

      <Animation />

      {/* Hero Section */}
      <section className="relative- mt-48">
        <div className="max-w-[1250px] mx-auto px-12 grid lg:grid-cols-[500px_auto] gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:spacey-8 text-center lg:text-left">
            <div className="sm:space-y-6 space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="font-black text-white">Create.</span> <br />
                <span className="font-black text-purple-300 italic">Publish.</span> <br />
                <span className="font-black bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">Grow.</span>
              </h1>
              <p className="md:text-2xl sm:text-xl text-lg text-gray-300 font-light leading-relaxed max-w-2xl md:max-w-none">
                The AI-powered platform that turns your ideas into <span className="font-semibold text-purple-300"> engaging content </span> and helps you build a thriving creator bussiness
              </p>
            </div>
            <div className="flex md:justify-start justify-center gap-4">
              <Link href="/dashboard">
                <Button variant="primary" size="xl" className={"rounded-full w-full sm:w-auto text-white"}>
                  Start Creating For Free
                  <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="xl" className={"rounded-full w-full sm:w-auto text-white"}>
                  Explore the Feed
                </Button>
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="flex">
            <Image className="w-full h-full object-cover" src={"/banner.png"} alt="banner" width={600} height={500} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative mt-14 z-10 py-16 | sm:py-24 px-4 sm:px-6 | bg-gradient-to-r from-gray-900/50 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl | font-black | mb-4 sm:mb-6 ">
              <span className="gradient-text-primary">Everything You Need</span>
            </h2>
            <p className="sm:text-xl text-lg | text-gray-400 max-w-3xl mx-auto px-4">
              From AI-powered writing assistance to advanced analytics, we &apos; ve built the complete tookit for modern creators.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 ga-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 card-glass">
                <CardContent>
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl mb-3 sm:mb-4 text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-sm sm:text-base">{feature.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section id="platform" className="relative mt-14 z-10 py-16 | sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl | font-black | mb-4 sm:mb-6 ">
              <span className="gradient-text-primary">How It Works</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Three powerful modules wokring together to supercharge your content creation.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="space-y-4">
                {platformTabs.map((ele, index) => (
                  <Button key={index} onClick={() => setActiveTab(index)} variant={activeTab === index ? "outline" : "ghost"} size="lg" className="w-full h-auto justify-start gap-2 p-6">
                    <div className="flex items-center gap-4">
                      {/* icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeTab === index
                        ? "bg-gradient-to-br from-purple-500 to-blue-500"
                        : "bg-muted"
                        }`}>
                        <ele.icon className="w-6 h-6" />
                      </div>
                      {/* title */}
                      <div className="text-left">
                        <h3 className="font-bold text-lg">{ele.title}</h3>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3">
              <Card className='bg-gray-900/50 border-gray-800'>
                <CardHeader>
                  <CardTitle>{platformTabs[activeTab].title}</CardTitle>
                  <CardDescription>{platformTabs[activeTab].desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {platformTabs[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </section>


      <section className="relative mt-14 z-10 py-16 | sm:py-23 px-6 bg-gradient-to-r from-gray-900/50 to-purple-900/20 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl | font-black text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="gradient-text-primary">Loved by creators worldwide </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            {socialProofStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 gradient-text-accent">
                  {stat.metric}
                </div>
                <div className="text-gray-400 text-base sm:text-lg">
                  {stat.label}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative mt-14 py-16 sm:py-20 sm:px-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl | font-black text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="gradient-text-primary">What creator say</span>
          </h2>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 rounded-xl py-10">
                <CardContent className='space-y-4'>
                  <div className="flex gap-2">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" key={index} />
                    ))}

                  </div>
                  <p className="mb-6 leading-relaxed text-gray-300">"{testimonial.content}"</p>


                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12">
                      <Image
                        src={`https://images.unsplash.com/photo-${testimonial.imageId}?w=100&h=100&fit=crop&crop=face`}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full border-2 border-gray-700 object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <Badge variant="secondary" className="lowercase mt-1">{testimonial.company}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section >

    </div >
  );
}
