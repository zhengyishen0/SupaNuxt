<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon">
        <div class="flex flex-col items-center">
          <MoreVertical class="h-4 w-4" />
          <span class="text-xs">More</span>
        </div>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>
        <HelpCircle class="h-4 w-4 mr-2" />
        Help
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Keyboard class="h-4 w-4 mr-2" />
        Shortcuts
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Accessibility class="h-4 w-4 mr-2" />
        Assistive Technology
      </DropdownMenuItem>
      <DropdownMenuItem>
        <AlignLeft class="h-4 w-4 mr-2" />
        Line Reader
      </DropdownMenuItem>
      <DropdownMenuItem>
        <PauseCircle class="h-4 w-4 mr-2" />
        Unscheduled Break
      </DropdownMenuItem>
      <DropdownMenuItem @click="$emit('showExitDialog')">
        <LogOut class="h-4 w-4 mr-2" />
        Exit the Exam
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup>
import { HelpCircle, Keyboard, Accessibility, AlignLeft, PauseCircle, LogOut, MoreVertical } from 'lucide-vue-next'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

defineEmits(['showExitDialog'])
</script>
