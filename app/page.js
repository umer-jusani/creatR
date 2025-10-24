import Animation from "@/components/animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { features } from "@/lib/data";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {


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
            {features.map((feature) => (
              <Card className="group  hover:scale-105 transition-all duration-300">
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
