"use client"

import * as React from "react"
import {
  Send,
  CheckCircle2,
  Copy,
  MessageSquare,
  Mail,
  SendHorizontal,
  Sparkles,
  AlertCircle,
  Loader2,
  RefreshCw,
} from "lucide-react"

interface OrderContactFormProps {
  selectedPackage: string
  onPackageChange: (pkgId: string) => void
}

const packageOptions = [
  { id: "landing-page", label: "Custom Landing Page", est: "Rp 1.750.000+" },
  { id: "web-app", label: "Web App & Dashboard", est: "Rp 4.850.000+" },
  { id: "web-novel", label: "Web Novel / Reader Portal", est: "Rp 3.250.000+" },
  { id: "custom", label: "Arsitektur Kustom / Konsultasi Khusus", est: "Sesuai Diskusi" },
]

export function OrderContactForm({ selectedPackage, onPackageChange }: OrderContactFormProps) {
  const [name, setName] = React.useState("")
  const [contactType, setContactType] = React.useState<"whatsapp" | "telegram" | "email">("whatsapp")
  const [contactValue, setContactValue] = React.useState("")
  const [budget, setBudget] = React.useState("Sesuai Paket")
  const [description, setDescription] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [orderId, setOrderId] = React.useState("")
  const [draftId, setDraftId] = React.useState("DRAFT-STUDIO")
  const [copied, setCopied] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null)

  // Initialize draftId safely on client mount
  React.useEffect(() => {
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase()
    setDraftId(`DRAFT-${randomHex}`)
  }, [])

  const selectedPkgData =
    packageOptions.find((p) => p.id === selectedPackage) || packageOptions[0]

  const generateOrderPayload = () => {
    const currentId = orderId || draftId
    return `[TWILIGHT STUDIO // ORDER INQUIRY]
------------------------------------
Order ID     : ${currentId}
Nama / Brand : ${name.trim() || "Belum diisi"}
Kontak       : [${contactType.toUpperCase()}] ${contactValue.trim() || "Belum diisi"}
Paket Pilihan: ${selectedPkgData.label} (${selectedPkgData.est})
Target Budget: ${budget}
Deskripsi    :
${description.trim() || "Belum ada catatan detail."}
------------------------------------
Dikirim melalui Portal Resmi Twilight Studio`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg(null)

    if (!name.trim()) {
      setErrorMsg("Mohon masukkan nama atau identitas brand kamu.")
      return
    }

    if (!contactValue.trim()) {
      setErrorMsg(`Mohon masukkan nomor atau alamat ${contactType} kamu agar kami dapat menghubungi kembali.`)
      return
    }

    if (!description.trim()) {
      setErrorMsg("Mohon tuliskan sedikit deskripsi atau visi proyek yang ingin dibuat.")
      return
    }

    setIsSubmitting(true)

    // Simulate direct secure API submission
    setTimeout(() => {
      const generatedId = `TL-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`
      setOrderId(generatedId)
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1200)
  }

  const handleCopyOrder = () => {
    const payload = generateOrderPayload()
    navigator.clipboard.writeText(payload)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(generateOrderPayload())
    window.open(`https://wa.me/?text=${text}`, "_blank")
  }

  const handleOpenTelegram = () => {
    const text = encodeURIComponent(generateOrderPayload())
    window.open(`https://t.me/share/url?url=https://twilightstudio.dev&text=${text}`, "_blank")
  }

  return (
    <section
      id="order-form"
      aria-labelledby="order-heading"
      className="px-6 py-24 bg-[#090A0F] relative overflow-hidden"
    >
      {/* Background warm orange ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-1/4 w-[500px] h-[400px] bg-[#D4A373]/[0.04] blur-[140px] rounded-full"
      />

      <div className="max-w-4xl mx-auto flex flex-col gap-12 relative">
        {/* Section title */}
        <div className="flex flex-col gap-3 text-center items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2A2E3D] bg-[#12141C]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] animate-pulse" />
            <span className="text-[0.62rem] font-mono font-bold tracking-[0.22em] uppercase text-[#D4A373]/90">
              03 // Direct Order &amp; Contact
            </span>
          </div>

          <h2
            id="order-heading"
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F9FAFB] leading-tight"
          >
            Mulai Proyek Kamu Sekarang
          </h2>
          <p className="text-sm text-[#9CA3AF] max-w-xl leading-relaxed">
            Kirimkan brief proyek kamu langsung ke antrian arsitek Twilight Studio. Tanpa perantara,
            respon cepat dalam waktu kurang dari 24 jam.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="border border-[#262626] rounded-2xl bg-[#0D0F17] p-8 sm:p-12 shadow-2xl relative">
          {/* Top orange gradient hairline */}
          <div
            className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4A373]/50 to-transparent"
            aria-hidden="true"
          />

          {isSuccess ? (
            /* ─── Success Confirmation View ────────────────────────────── */
            <div className="flex flex-col items-center text-center gap-6 py-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#D4A373]/15 border border-[#D4A373]/40 text-[#D4A373] shadow-[0_0_30px_rgba(212,163,115,0.2)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="flex flex-col gap-2 max-w-lg">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4A373]">
                  Status: Pesanan Berhasil Diterima // In Queue
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F9FAFB] tracking-tight">
                  Brief Proyek Siap Diproses
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  Terima kasih <span className="text-[#F9FAFB] font-semibold">{name}</span>! Permintaan kamu
                  telah terdaftar dengan ID Referensi:
                </p>
                <div className="mt-2 py-2 px-4 rounded-md bg-[#12141C] border border-[#D4A373]/40 text-[#D4A373] font-mono font-bold tracking-widest text-lg w-fit mx-auto">
                  {orderId}
                </div>
              </div>

              {/* Direct communication buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md pt-4">
                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#D4A373] text-[#090A0F] font-bold text-xs uppercase tracking-wider hover:bg-[#E8B887] transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  Hubungi via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={handleOpenTelegram}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#12141C] text-[#F9FAFB] border border-[#2A2E3D] hover:border-[#D4A373]/50 font-bold text-xs uppercase tracking-wider hover:bg-[#1A1D26] transition-all cursor-pointer"
                >
                  <SendHorizontal className="w-4 h-4" />
                  Hubungi via Telegram
                </button>
              </div>

              {/* Secondary action: copy / reset */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#1E222D] w-full max-w-md justify-between">
                <button
                  type="button"
                  onClick={handleCopyOrder}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9CA3AF] hover:text-[#D4A373] transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {copied ? "Format Tersalin! ✓" : "Salin Format Brief"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false)
                    setName("")
                    setContactValue("")
                    setDescription("")
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#6B7280] hover:text-[#F9FAFB] transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Kirim Pesanan Baru
                </button>
              </div>
            </div>
          ) : (
            /* ─── Standard Interactive Form ────────────────────────────── */
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {errorMsg && (
                <div
                  role="alert"
                  className="flex items-center gap-3 p-4 rounded-lg bg-red-950/30 border border-red-800/50 text-red-300 text-xs font-mono"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Row 1: Nama & Kontak */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Field 1: Nama */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="client-name"
                    className="text-xs font-mono font-bold tracking-wider uppercase text-[#9CA3AF]"
                  >
                    Nama Lengkap / Brand <span className="text-[#D4A373]">*</span>
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="misal: Alex Sanders / Creative Works"
                    className="w-full bg-[#12141C] border border-[#262626] rounded-md px-4 py-3 text-sm text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:border-[#D4A373] focus:ring-1 focus:ring-[#D4A373] transition-colors"
                  />
                </div>

                {/* Field 2: Kontak dengan Selector */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="client-contact"
                      className="text-xs font-mono font-bold tracking-wider uppercase text-[#9CA3AF]"
                    >
                      Saluran Kontak <span className="text-[#D4A373]">*</span>
                    </label>
                    <div className="flex items-center gap-1">
                      {(["whatsapp", "telegram", "email"] as const).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setContactType(t)}
                          className={`text-[0.62rem] font-mono uppercase px-2 py-0.5 rounded transition-colors cursor-pointer ${
                            contactType === t
                              ? "bg-[#D4A373]/20 text-[#D4A373] border border-[#D4A373]/40"
                              : "text-[#6B7280] hover:text-[#9CA3AF]"
                          }`}
                        >
                          {t === "whatsapp" ? "WA" : t === "telegram" ? "TG" : "Email"}
                        </button>
                      ))}
                    </div>
                  </div>
                  <input
                    id="client-contact"
                    type="text"
                    required
                    value={contactValue}
                    onChange={(e) => setContactValue(e.target.value)}
                    placeholder={
                      contactType === "whatsapp"
                        ? "+62 812-3456-7890"
                        : contactType === "telegram"
                        ? "@username_telegram"
                        : "contact@domainkamu.com"
                    }
                    className="w-full bg-[#12141C] border border-[#262626] rounded-md px-4 py-3 text-sm text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:border-[#D4A373] focus:ring-1 focus:ring-[#D4A373] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Paket Layanan Selection */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-mono font-bold tracking-wider uppercase text-[#9CA3AF]">
                  Pilihan Paket Layanan <span className="text-[#D4A373]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {packageOptions.map((opt) => {
                    const isSelected = selectedPackage === opt.id
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => onPackageChange(opt.id)}
                        className={`flex items-center justify-between p-4 rounded-lg border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#D4A373]/10 border-[#D4A373] shadow-[0_0_20px_rgba(212,163,115,0.06)]"
                            : "bg-[#12141C] border-[#262626] hover:border-[#D4A373]/40"
                        }`}
                      >
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <span
                            className={`text-sm font-semibold tracking-tight ${
                              isSelected ? "text-[#D4A373]" : "text-[#F9FAFB]"
                            }`}
                          >
                            {opt.label}
                          </span>
                          <span className="text-[0.68rem] font-mono text-[#6B7280]">
                            Estimasi: {opt.est}
                          </span>
                        </div>
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                            isSelected
                              ? "border-[#D4A373] bg-[#D4A373]"
                              : "border-[#4B5563]"
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#090A0F]" />}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Row 3: Budget Range */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="budget-select"
                  className="text-xs font-mono font-bold tracking-wider uppercase text-[#9CA3AF]"
                >
                  Ekspektasi Alokasi Budget
                </label>
                <select
                  id="budget-select"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-[#12141C] border border-[#262626] rounded-md px-4 py-3 text-sm text-[#F9FAFB] focus:outline-none focus:border-[#D4A373] focus:ring-1 focus:ring-[#D4A373] transition-colors"
                >
                  <option value="Sesuai Paket">Sesuai Estimasi Paket Default</option>
                  <option value="Rp 1.5M – 3M">Tier Esensial (Rp 1.500.000 – Rp 3.000.000)</option>
                  <option value="Rp 3M – 6M">Tier Menengah / App (Rp 3.000.000 – Rp 6.000.000)</option>
                  <option value="Rp 6M+ (Enterprise)">Tier Enterprise / Full Ecosystem (Rp 6.000.000+)</option>
                  <option value="Diskusikan Fleksibel">Fleksibel / Diskusikan saat review</option>
                </select>
              </div>

              {/* Row 4: Deskripsi Proyek */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="project-desc"
                    className="text-xs font-mono font-bold tracking-wider uppercase text-[#9CA3AF]"
                  >
                    Deskripsi &amp; Visi Proyek <span className="text-[#D4A373]">*</span>
                  </label>
                  <span className="text-[0.62rem] font-mono text-[#6B7280]">
                    Semakin detail brief, semakin cepat arsitektur dibuat
                  </span>
                </div>
                <textarea
                  id="project-desc"
                  rows={4}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ceritakan fitur utama yang kamu butuhkan, target audiens, deadline, atau referensi website yang kamu sukai..."
                  className="w-full bg-[#12141C] border border-[#262626] rounded-md p-4 text-sm text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:border-[#D4A373] focus:ring-1 focus:ring-[#D4A373] transition-colors resize-y min-h-[120px]"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md bg-[#D4A373] text-[#090A0F] font-bold text-xs uppercase tracking-wider hover:bg-[#E8B887] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#D4A373]/15 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Memvalidasi Arsitektur...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Kirim Pesanan Proyek
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-[#12141C] text-[#F9FAFB] border border-[#262626] hover:border-[#D4A373]/50 hover:bg-[#1A1D26] font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D4A373]" />
                  Chat Cepat WhatsApp
                </button>
              </div>

              <p className="text-[0.68rem] font-mono text-center text-[#6B7280]">
                🔒 Tidak ada spam. Data kontak kamu hanya digunakan tim Twilight Studio untuk membalas brief proyek ini.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
