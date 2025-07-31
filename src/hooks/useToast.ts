import { useToast as useToastOriginal } from '@/components/ui/use-toast'

export const useToast = () => {
  const { toast } = useToastOriginal()

  const showSuccess = (title: string, description?: string) => {
    toast({
      title,
      description,
      variant: 'success',
    })
  }

  const showError = (title: string, description?: string) => {
    toast({
      title,
      description,
      variant: 'destructive',
    })
  }

  const showInfo = (title: string, description?: string) => {
    toast({
      title,
      description,
      variant: 'default',
    })
  }

  return {
    toast,
    showSuccess,
    showError,
    showInfo,
  }
} 