"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function NewsletterSignup() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    toast({
      title: "Inscrição realizada",
      description: "Você foi inscrito em nossa newsletter com sucesso!",
    })
    setEmail("")
  }

  return (
    <div className="container flex flex-col items-center justify-center space-y-4 text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Fique por dentro das novidades</h2>
      <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
        Inscreva-se em nossa newsletter e receba ofertas exclusivas, lançamentos e dicas
      </p>
      <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-md flex-col gap-2 sm:flex-row">
        <Input
          placeholder="Seu melhor e-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12"
          required
        />
        <Button type="submit" className="h-12">
          <Send className="mr-2 h-4 w-4" />
          Inscrever-se
        </Button>
      </form>
    </div>
  )
}

