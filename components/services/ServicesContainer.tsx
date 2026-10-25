"use client"

import * as React from "react"
import { ServicesHeader } from "@/components/services/ServicesHeader"
import { PricingPackages } from "@/components/services/PricingPackages"
import { FeatureComparison } from "@/components/services/FeatureComparison"
import { OrderContactForm } from "@/components/services/OrderContactForm"

export function ServicesContainer() {
  const [selectedPackage, setSelectedPackage] = React.useState<string>("web-app")

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackage(packageId)
    // Smooth scroll down to order form
    const el = document.getElementById("order-form")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col">
      <ServicesHeader />
      <PricingPackages
        selectedPackage={selectedPackage}
        onSelectPackage={handleSelectPackage}
      />
      <FeatureComparison />
      <OrderContactForm
        selectedPackage={selectedPackage}
        onPackageChange={setSelectedPackage}
      />
    </div>
  )
}
