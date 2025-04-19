"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Zap, Shield, Users, Check, ChevronRight, Download, Bot, Sparkles, Menu, X } from "lucide-react"

export default function LandingPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index)
    }

    useEffect(() => {
        const onScroll = () => {
            const header = document.getElementById("header");
            if (header) {
                if (window.scrollY > 0) {
                    header.classList.add("bg-black/50", "border-b", "border-purple-800/20", "backdrop-blur-lg");
                } else {
                    header.classList.remove("bg-black/50", "border-b", "border-purple-800/20", "backdrop-blur-lg");
                }
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const faqs = [
        {
            question: "Apa itu ARCH-MD Bot?",
            answer:
                "ARCH-MD adalah bot WhatsApp canggih yang memungkinkan Anda mengunduh media, menggunakan fitur AI, dan mengotomatiskan berbagai fitur WhatsApp untuk meningkatkan pengalaman pengguna dan efisiensi bisnis Anda.",
        },
        {
            question: "Bagaimana cara mengunduh media dengan ARCH-MD?",
            answer:
                "ARCH-MD memungkinkan Anda mengunduh berbagai jenis media seperti video, audio, dan gambar dari berbagai platform hanya dengan mengirimkan command dan link ke bot. Bot akan memproses dan mengirimkan media tersebut langsung ke WhatsApp Anda.",
        },
        {
            question: "Fitur AI apa saja yang tersedia di ARCH-MD?",
            answer:
                "ARCH-MD dilengkapi dengan berbagai fitur AI seperti pengenalan gambar, pemrosesan bahasa alami, chatbot cerdas, dan kemampuan untuk menjawab pertanyaan dengan konteks yang relevan berdasarkan data terbaru.",
        },
        {
            question: "Apakah ARCH-MD aman digunakan untuk bisnis?",
            answer:
                "Ya, ARCH-MD didesain dengan keamanan sebagai prioritas utama. Semua pesan dan data dienkripsi end-to-end, dan kami tidak menyimpan percakapan pribadi pengguna. Bot ini juga mematuhi kebijakan WhatsApp Business API.",
        },
        {
            question: "Berapa banyak pesan yang dapat diproses ARCH-MD?",
            answer:
                "Jumlah pesan yang dapat diproses tergantung pada paket yang Anda pilih. Untuk free user mendukung hingga 50 limit, dan Premium user untuk kebutuhan tanpa batas.",
        },
    ]

    return (
        <div className="min-h-screen w-full bg-black relative">
            {/* Purple mesh gradient background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] bg-purple-600/20 rounded-full blur-[120px]"></div>
                <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-purple-500/20 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-[40%] left-[20%] w-[70%] h-[70%] bg-purple-700/20 rounded-full blur-[120px]"></div>
            </div>

            {/* Header */}
            <header id="header" className="sticky top-0 z-40 w-full px-5">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Bot className="h-6 w-6 text-purple-300" />
                        <span className="text-xl font-bold text-white">ARCH-MD</span>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden flex items-center justify-center rounded-md p-2 text-purple-200 hover:bg-purple-800/20 hover:text-white"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="#features" className="text-sm text-purple-200 hover:text-white transition-colors">
                            Fitur
                        </Link>
                        <Link href="#pricing" className="text-sm text-purple-200 hover:text-white transition-colors">
                            Harga
                        </Link>
                        <Link href="#faq" className="text-sm text-purple-200 hover:text-white transition-colors">
                            FAQ
                        </Link>
                        <Link href="#contact" className="text-sm text-purple-200 hover:text-white transition-colors">
                            Kontak
                        </Link>
                        <Link
                            href="#pricing"
                            className="inline-flex h-9 items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400"
                        >
                            Mulai Sekarang
                        </Link>
                    </nav>
                </div>

                {/* Mobile menu */}
                <div className={`${isMobileMenuOpen ? "block" : "hidden"} fixed top-16 left-0 w-full md:hidden`}>
                    <div className="space-y-1 px-4 pb-3 pt-2 bg-black/70 backdrop-blur-lg border-b border-purple-800/20">
                        <Link
                            href="#features"
                            className="block rounded-md px-3 py-2 text-base font-medium text-purple-200 hover:bg-purple-800/20 hover:text-white"
                            onClick={closeMobileMenu}
                        >
                            Fitur
                        </Link>
                        <Link
                            href="#pricing"
                            className="block rounded-md px-3 py-2 text-base font-medium text-purple-200 hover:bg-purple-800/20 hover:text-white"
                            onClick={closeMobileMenu}
                        >
                            Harga
                        </Link>
                        <Link
                            href="#faq"
                            className="block rounded-md px-3 py-2 text-base font-medium text-purple-200 hover:bg-purple-800/20 hover:text-white"
                            onClick={closeMobileMenu}
                        >
                            FAQ
                        </Link>
                        <Link
                            href="#contact"
                            className="block rounded-md px-3 py-2 text-base font-medium text-purple-200 hover:bg-purple-800/20 hover:text-white"
                            onClick={closeMobileMenu}
                        >
                            Kontak
                        </Link>
                        <Link
                            href="#pricing"
                            className="block w-full mt-3 rounded-md bg-purple-600 px-3 py-2 text-center text-base font-medium text-white shadow hover:bg-purple-700"
                            onClick={closeMobileMenu}
                        >
                            Mulai Sekarang
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-20 pb-16 md:pt-32 md:pb-24 px-5">
                <div className="flex justify-center items-center">
                    <div className="space-y-6 max-w-4xl text-center">
                        <div className="inline-flex items-center justify-center text-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-sm text-purple-200">
                            <Sparkles width={16} />
                            <span>Otomatisasi WhatsApp dengan AI</span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                            ARCH-MD: Bot WhatsApp Multifungsi
                        </h1>
                        <p className="text-purple-200 md:text-xl">
                            Download media dari berbagai platform, gunakan AI, dan otomatiskan fitur WhatsApp Anda dengan bot canggih yang meningkatkan
                            pengalaman pengguna.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="#pricing"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400 cursor-pointer"
                            >
                                Mulai Sekarang
                            </Link>
                            <Link
                                href="https://wa.me/6283866712646?text=.menu"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-purple-500 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-purple-800/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400 cursor-pointer"
                            >
                                Lihat Demo <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 md:py-24 px-5">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
                        Fitur Unggulan
                    </h2>
                    <p className="mx-auto max-w-[700px] text-purple-200">
                        ARCH-MD hadir dengan berbagai fitur canggih untuk memaksimalkan pengalaman WhatsApp Anda.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            icon: <Download className="h-10 w-10 text-purple-400" />,
                            title: "Download Media",
                            description: "Unduh video, audio, dan gambar dari berbagai platform langsung ke WhatsApp Anda.",
                        },
                        {
                            icon: <Sparkles className="h-10 w-10 text-purple-400" />,
                            title: "Integrasi AI",
                            description: "Akses fitur AI canggih seperti pengenalan gambar dan pemrosesan bahasa alami.",
                        },
                        {
                            icon: <MessageCircle className="h-10 w-10 text-purple-400" />,
                            title: "Respons Otomatis",
                            description: "Atur respons otomatis cerdas untuk pertanyaan umum pelanggan dan hemat waktu.",
                        },
                        {
                            icon: <Shield className="h-10 w-10 text-purple-400" />,
                            title: "Keamanan Terjamin",
                            description: "Enkripsi end-to-end memastikan komunikasi bisnis Anda tetap aman dan pribadi.",
                        },
                        {
                            icon: <Users className="h-10 w-10 text-purple-400" />,
                            title: "Pesan Massal",
                            description: "Kirim pesan melalui grup WhatsApp Anda",
                        },
                        {
                            icon: <Zap className="h-10 w-10 text-purple-400" />,
                            title: "Integrasi Cepat",
                            description: "Pengaturan mudah dan sudah diintegrasi dengan akun WhatsApp Business ",
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg backdrop-blur-sm border border-white/10 bg-linear-to-br from-purple-800/15 to-purple-800/5 p-6 shadow-lg transition-all hover:shadow-xl hover:from-white/15 hover:to-white/5"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-purple-200">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-16 md:py-24 relative px-5">
                <div className="absolute -z-10 inset-0 bg-purple-500 blur-[120px] opacity-20"></div>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
                        Paket Harga Terjangkau
                    </h2>
                    <p className="mx-auto max-w-[700px] text-purple-200">
                        Pilih paket yang paling sesuai dengan kebutuhan Anda. Tanpa biaya tambahan.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Basic Plan */}
                    <div className="relative overflow-hidden rounded-xl backdrop-blur-lg border border-white/10 bg-linear-to-br from-purple-800/15 to-purple-800/5 p-6 shadow-lg transition-all hover:shadow-xl hover:border-purple-400/50 flex flex-col justify-between">
                        <div className="mb-6">
                            <h3 className="text-lg font-medium text-purple-300 mb-1">Free User</h3>
                            <div className="flex items-baseline">
                                <span className="text-4xl font-bold text-white">Rp0K</span>
                                <span className="ml-1 text-purple-300">/bulan</span>
                            </div>
                            <p className="mt-2 text-sm text-purple-200">Sempurna untuk kebutuhan kecil yang baru memulai.</p>
                        </div>
                        <ul className="space-y-3 mb-6">
                            {[
                                "Hingga 50 limit per hari",
                                "Fitur dasar",
                                "Download media dasar",
                                "Fitur AI terbatas",
                                "Dukungan customer service",
                            ].map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-purple-400" />
                                    <span className="text-purple-100 text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="https://wa.me/6283866712646?text=.menu"
                            className="block w-full rounded-md bg-purple-600/80 backdrop-blur-sm py-2 text-center text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400"
                        >
                            Chat Sekarang
                        </Link>
                    </div>

                    {/* Pro Plan */}
                    <div className="relative overflow-hidden rounded-xl backdrop-blur-lg border bg-linear-to-br from-purple-800/15 to-purple-800/5 p-6 shadow-lg transition-all hover:shadow-xl border-purple-400/70 scale-105 z-10 flex flex-col justify-between">
                        <div className="absolute top-0 right-0 bg-purple-500 rounded-bl-3xl py-2 px-3">
                            <span className="text-xs font-bold text-white">POPULER</span>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-lg font-medium text-purple-200 mb-1">Group Rental</h3>
                            <div className="flex items-baseline">
                                <span className="text-4xl font-bold text-white">Rp0K</span>
                                <span className="ml-1 text-purple-200">/bulan</span>
                            </div>
                            <p className="mt-2 text-sm text-purple-200">
                                Ideal untuk grup dengan kebutuhan member.
                            </p>
                        </div>
                        <ul className="space-y-3 mb-6">
                            {[
                                "30 hari",
                                "Include free plan user",
                                "Include premium plan user",
                                "Fitur grup",
                                "Dukungan prioritas",
                            ].map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-purple-300" />
                                    <span className="text-purple-100 text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="https://wa.me/6283866712646?text=.menu"
                            className="block w-full rounded-md bg-purple-500 py-2 text-center text-sm font-medium text-white shadow transition-colors hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400"
                        >
                            Chat Sekarang
                        </Link>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="relative overflow-hidden rounded-xl backdrop-blur-lg border border-white/10 bg-linear-to-br from-purple-800/15 to-purple-800/5 p-6 shadow-lg transition-all hover:shadow-xl hover:border-purple-400/50 flex flex-col justify-between">
                        <div className="mb-6">
                            <h3 className="text-lg font-medium text-purple-300 mb-1">Premium User</h3>
                            <div className="flex items-baseline">
                                <span className="text-4xl font-bold text-white">Rp0K</span>
                                <span className="ml-1 text-purple-300">/bulan</span>
                            </div>
                            <p className="mt-2 text-sm text-purple-200">Untuk user premium dengan kebutuhan tinggi.</p>
                        </div>
                        <ul className="space-y-3 mb-6">
                            {[
                                "30 hari",
                                "Download media tanpa batas",
                                "Fitur AI lengkap",
                                "1 nomor WhatsApp dengan limit tanpa batas",
                                "Unlock semua fitur",
                                "Akses script bot",
                                "Akses API",
                                "Dukungan 24/7 dedicated",
                            ].map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-purple-400" />
                                    <span className="text-purple-100 text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="https://wa.me/6283866712646?text=.menu"
                            className="block w-full rounded-md bg-purple-600/80 backdrop-blur-sm py-2 text-center text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400"
                        >
                            Chat Sekarang
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 md:py-24 px-5">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
                        Pertanyaan Umum
                    </h2>
                    <p className="mx-auto max-w-[700px] text-purple-200">
                        Temukan jawaban untuk pertanyaan yang sering diajukan tentang ARCH-MD Bot.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="mb-4 rounded-lg backdrop-blur-sm bg-black/50 border border-purple-500/20 overflow-hidden"
                        >
                            <button
                                className="flex justify-between items-center w-full p-4 text-left"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="font-medium text-white">{faq.question}</span>
                                <ChevronRight
                                    className={`h-5 w-5 text-purple-300 transition-transform ${activeAccordion === index ? "rotate-90" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`px-4 overflow-hidden transition-all duration-300 ${activeAccordion === index ? "max-h-96 pb-4" : "max-h-0"
                                    }`}
                            >
                                <p className="text-purple-200">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 px-5">
                <div className="rounded-2xl backdrop-blur-lg bg-black/70 border border-purple-500/30 p-8 md:p-12 shadow-lg">
                    <div className="grid gap-6 md:grid-cols-2 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Siap mengubah bisnis Anda?</h2>
                            <p className="text-purple-200 mb-6">
                                Bergabunglah dengan ribuan bisnis yang sudah menggunakan ARCH-MD Bot untuk mengotomatiskan interaksi
                                pelanggan dan meningkatkan penjualan.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#pricing"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400"
                                >
                                    Mulai Sekarang
                                </Link>
                                <Link
                                    href="https://wa.me/62895702633030?text=bagi%20nomor%20bot%20nya"
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-purple-500 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-purple-800/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400"
                                >
                                    Jadwalkan Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-purple-800/30 bg-black/70 backdrop-blur-sm px-5">
                <div className="py-8 md:py-12">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Bot className="h-6 w-6 text-purple-400" />
                                <span className="text-xl font-bold text-white">ARCH-MD</span>
                            </div>
                            <p className="text-sm text-purple-300 mb-4">
                                Otomatiskan komunikasi WhatsApp bisnis Anda dengan solusi bot canggih kami.
                            </p>
                            <div className="flex space-x-4">{/* Social icons would go here */}</div>
                        </div>
                        <div>
                            <h3 className="font-medium text-white mb-4">Produk</h3>
                            <ul className="space-y-2">
                                {["Fitur", "Harga", "Integrasi", "FAQ", "Changelog"].map((item, index) => (
                                    <li key={index}>
                                        <Link href="#" className="text-sm text-purple-300 hover:text-white transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-white mb-4">Perusahaan</h3>
                            <ul className="space-y-2">
                                {["Tentang Kami", "Blog", "Karir", "Kontak", "Partner"].map((item, index) => (
                                    <li key={index}>
                                        <Link href="#" className="text-sm text-purple-300 hover:text-white transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-white mb-4">Legal</h3>
                            <ul className="space-y-2">
                                {["Syarat & Ketentuan", "Privasi", "Cookies", "Lisensi", "Pengaturan"].map((item, index) => (
                                    <li key={index}>
                                        <Link href="#" className="text-sm text-purple-300 hover:text-white transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-purple-800/30 flex flex-col md:flex-row justify-between items-center text-purple-400 text-xs">
                        <p>
                            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className="underline">CC BY-NC-SA
                                4.0</a>
                                &nbsp;&copy; {new Date().getFullYear()} Ammar
                        </p>
                        <p>
                            Produdly Created by&nbsp;
                            <a href="https://ammaricano.my.id" className="underline">ammaricano</a>
                            and Powered by&nbsp;
                            <a href="https://nextjs.org" className="underline">NextJS</a>
                        </p>

                    </div>
                </div>
            </footer>
        </div>
    )
}
