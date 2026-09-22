import { useState } from 'react'
import { Link } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type MaterialFormProps = {
  onSubmit?: (data: MaterialFormData) => void
}

export type MaterialFormData = {
  code: string
  designation: string
  type: string
  famille: string
  fournisseur: string
  unite: string
  couleur: string
  largeur: string
  reference: string
  seuilAlerte: string
  prixAchat: string
  statut: string
}

export function MaterialForm({ onSubmit }: MaterialFormProps) {
  const [formData, setFormData] = useState<MaterialFormData>({
    code: 'MAT-000249',
    designation: '',
    type: '',
    famille: '',
    fournisseur: '',
    unite: '',
    couleur: '',
    largeur: '',
    reference: '',
    seuilAlerte: '',
    prixAchat: '',
    statut: 'actif',
  })

  const handleChange = (field: keyof MaterialFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit?.(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Code */}
        <div className="space-y-2">
          <Label htmlFor="code">Code</Label>

          <Input
            id="code"
            value={formData.code}
            readOnly
            className="bg-muted"
          />

          <p className="text-xs text-muted-foreground">
            Généré automatiquement
          </p>
        </div>

        {/* Désignation */}
        <div className="space-y-2">
          <Label htmlFor="designation">Désignation</Label>

          <Input
            id="designation"
            value={formData.designation}
            onChange={(e) => handleChange('designation', e.target.value)}
            placeholder="Ex. Jersey coton 180g"
          />
        </div>

        {/* Type */}
        <div className="space-y-2">
          <Label>Type</Label>

          <Select
            value={formData.type}
            onValueChange={(value) => handleChange('type', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner un type" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="tissu">Tissu</SelectItem>
              <SelectItem value="accessoire">Accessoire</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Famille */}
        <div className="space-y-2">
          <Label htmlFor="famille">Famille</Label>

          <Input
            id="famille"
            value={formData.famille}
            onChange={(e) => handleChange('famille', e.target.value)}
            placeholder="Ex. Jersey, Fil, Bouton..."
          />
        </div>

        {/* Fournisseur */}
        <div className="space-y-2">
          <Label>Fournisseur</Label>

          <Select
            value={formData.fournisseur}
            onValueChange={(value) => handleChange('fournisseur', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner un fournisseur" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="tissus-el-djazair">
                Tissus El Djazair
              </SelectItem>

              <SelectItem value="filature-tlemcen">
                Filature de Tlemcen
              </SelectItem>

              <SelectItem value="accessoires-el-bahja">
                Accessoires El Bahja
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Unité */}
        <div className="space-y-2">
          <Label>Unité</Label>

          <Select
            value={formData.unite}
            onValueChange={(value) => handleChange('unite', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner une unité" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="metre">Mètre</SelectItem>
              <SelectItem value="kg">Kg</SelectItem>
              <SelectItem value="rouleau">Rouleau</SelectItem>
              <SelectItem value="bobine">Bobine</SelectItem>
              <SelectItem value="piece">Pièce</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Couleur */}
        <div className="space-y-2">
          <Label htmlFor="couleur">Couleur</Label>

          <Input
            id="couleur"
            value={formData.couleur}
            onChange={(e) => handleChange('couleur', e.target.value)}
            placeholder="Ex. Noir"
          />
        </div>

        {/* Largeur */}
        <div className="space-y-2">
          <Label htmlFor="largeur">Largeur</Label>

          <Input
            id="largeur"
            type="number"
            value={formData.largeur}
            onChange={(e) => handleChange('largeur', e.target.value)}
            placeholder="Ex. 180"
          />

          <p className="text-xs text-muted-foreground">
            Pour les tissus uniquement
          </p>
        </div>

        {/* Référence */}
        <div className="space-y-2">
          <Label htmlFor="reference">Référence</Label>

          <Input
            id="reference"
            value={formData.reference}
            onChange={(e) => handleChange('reference', e.target.value)}
            placeholder="Ex. JC-180-BLK"
          />
        </div>

        {/* Seuil d'alerte */}
        <div className="space-y-2">
          <Label htmlFor="seuilAlerte">Seuil d’alerte</Label>

          <Input
            id="seuilAlerte"
            type="number"
            value={formData.seuilAlerte}
            onChange={(e) => handleChange('seuilAlerte', e.target.value)}
            placeholder="Ex. 500"
          />
        </div>

        {/* Prix d'achat */}
        <div className="space-y-2">
          <Label htmlFor="prixAchat">
            Prix d’achat indicatif
          </Label>

          <Input
            id="prixAchat"
            type="number"
            value={formData.prixAchat}
            onChange={(e) => handleChange('prixAchat', e.target.value)}
            placeholder="Ex. 850"
          />

          <p className="text-xs text-muted-foreground">DA</p>
        </div>

        {/* Statut */}
        <div className="space-y-2">
          <Label>Statut</Label>

          <Select
            value={formData.statut}
            onValueChange={(value) => handleChange('statut', value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="actif">Actif</SelectItem>
              <SelectItem value="archive">Archivé</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex items-center justify-end gap-3 border-t pt-6">
        <Button variant="outline" type="button" asChild>
<Link to="/stock/matieres">
  Annuler
</Link>
        </Button>

        <Button type="submit">
          Enregistrer
        </Button>
      </div>
    </form>
  )
}