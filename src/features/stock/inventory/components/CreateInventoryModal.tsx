import { useState } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalField,
} from '@/features/_shared/Modal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useLanguage } from '@/lib/i18n'

interface CreateInventoryModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit?: (data: InventoryFormValues) => void
}

export interface InventoryFormValues {
  matiere: string
  couleur: string
  lot: string
  quantite: string
  motif: string
  commentaire: string
}

const EMPTY: InventoryFormValues = {
  matiere: '',
  couleur: '',
  lot: '',
  quantite: '',
  motif: '',
  commentaire: '',
}

// TODO: remplacer par les vraies données (API / hooks)
const MOTIFS = [
  { value: 'controle-periodique', label: 'Contrôle périodique' },
  { value: 'ecart-constate', label: 'Écart constaté' },
  { value: 'reception', label: 'Réception' },
  { value: 'autre', label: 'Autre' },
]

export function CreateInventoryModal({
  open,
  onOpenChange,
  onSubmit,
}: CreateInventoryModalProps) {
  const { t } = useLanguage()
  const [values, setValues] = useState<InventoryFormValues>(EMPTY)

  // TODO: remplacer par la vraie logique métier
  const matiereSuiviCouleur = true
  const matieres: { id: string; nom: string }[] = []
  const couleurs: { id: string; nom: string }[] = []
  const lots: { id: string; reference: string }[] = []

  const set = (patch: Partial<InventoryFormValues>) =>
    setValues((prev) => ({ ...prev, ...patch }))

  const isValid = values.matiere && values.quantite !== '' && values.motif

  function handleOpenChange(next: boolean) {
    if (!next) setValues(EMPTY)
    onOpenChange(next)
  }

  function handleSubmit() {
    if (!isValid) return
    onSubmit?.(values)
    handleOpenChange(false)
  }

  return (
    <Modal open={open} onOpenChange={handleOpenChange}>
      <ModalHeader
        title={t('Créer un inventaire')}
        onClose={() => handleOpenChange(false)}
      />

      <ModalBody>
        <ModalField label={t('Matière')}>
          <Select value={values.matiere} onValueChange={(v) => set({ matiere: v })}>
            <SelectTrigger className="bg-muted/40">
              <SelectValue placeholder={t('Sélectionner une matière')} />
            </SelectTrigger>
            <SelectContent>
              {matieres.map((m) => (
                <SelectItem key={m.id} value={m.id}>
                  {m.nom}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </ModalField>

        {matiereSuiviCouleur && (
          <ModalField label={t('Couleur')}>
            <Select
              value={values.couleur}
              onValueChange={(v) => set({ couleur: v })}
              disabled={!values.matiere}
            >
              <SelectTrigger className="bg-muted/40">
                <SelectValue placeholder={t('Sélectionner une couleur')} />
              </SelectTrigger>
              <SelectContent>
                {couleurs.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.nom}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </ModalField>
        )}

        <ModalField label={t('Lot / Rouleau')}>
          <Select
            value={values.lot}
            onValueChange={(v) => set({ lot: v })}
            disabled={!values.matiere}
          >
            <SelectTrigger className="bg-muted/40">
              <SelectValue placeholder={t('Sélectionner un lot / rouleau')} />
            </SelectTrigger>
            <SelectContent>
              {lots.map((l) => (
                <SelectItem key={l.id} value={l.id}>
                  {l.reference}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </ModalField>

        <div className="grid grid-cols-2 gap-4">
          <ModalField label={t('Quantité comptée')}>
            <Input
              type="number"
              step="0.01"
              value={values.quantite}
              onChange={(e) => set({ quantite: e.target.value })}
              placeholder="0.00"
              className="bg-muted/40"
            />
          </ModalField>

          <ModalField label={t('Motif')}>
            <Select value={values.motif} onValueChange={(v) => set({ motif: v })}>
              <SelectTrigger className="bg-muted/40">
                <SelectValue placeholder={t('Sélectionner un motif')} />
              </SelectTrigger>
              <SelectContent>
                {MOTIFS.map((m) => (
                  <SelectItem key={m.value} value={m.value}>
                    {t(m.label)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </ModalField>
        </div>

        <ModalField label={t('Commentaire')}>
          <Textarea
            value={values.commentaire}
            onChange={(e) => set({ commentaire: e.target.value })}
            rows={3}
            placeholder={t('Ajouter une note...')}
            className="bg-muted/40"
          />
        </ModalField>
      </ModalBody>

      <ModalFooter>
        <Button variant="ghost" size="sm" onClick={() => handleOpenChange(false)}>
          {t('Annuler')}
        </Button>
        <Button size="sm" disabled={!isValid} onClick={handleSubmit}>
          {t("Créer l'inventaire")}
        </Button>
      </ModalFooter>
    </Modal>
  )
}