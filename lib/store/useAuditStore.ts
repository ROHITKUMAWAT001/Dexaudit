import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ToolDetail = {
  plan: string;
  monthlySpend: number;
  seats: number;
};

interface AuditState {
  // Step 1: Context
  teamSize: string;
  companyStage: string;
  primaryUseCase: string;
  toolUsageFrequency: string;
  aiMaturity: string;

  // Step 2: Tool Selection
  selectedTools: string[];

  // Step 3: Pricing
  toolDetails: Record<string, ToolDetail>;

  // Navigation
  currentStep: number;

  // Actions
  setContext: (
    data: Partial<
      Pick<
        AuditState,
        "teamSize" | "companyStage" | "primaryUseCase" | "toolUsageFrequency" | "aiMaturity"
      >
    >
  ) => void;
  toggleTool: (toolId: string) => void;
  updateToolDetail: (toolId: string, detail: Partial<ToolDetail>) => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  reset: () => void;
}

export const useAuditStore = create<AuditState>()(
  persist(
    (set) => ({
      teamSize: "",
      companyStage: "",
      primaryUseCase: "",
      toolUsageFrequency: "",
      aiMaturity: "",
      selectedTools: [],
      toolDetails: {},
      currentStep: 1,

      setContext: (data) => set((state) => ({ ...state, ...data })),

      toggleTool: (toolId) =>
        set((state) => {
          const isSelected = state.selectedTools.includes(toolId);
          if (isSelected) {
            const remainingDetails = { ...state.toolDetails };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delete (remainingDetails as any)[toolId];
            return {
              selectedTools: state.selectedTools.filter((id) => id !== toolId),
              toolDetails: remainingDetails,
            };
          } else {
            return {
              selectedTools: [...state.selectedTools, toolId],
              toolDetails: {
                ...state.toolDetails,
                [toolId]: { plan: "", monthlySpend: 0, seats: 0 },
              },
            };
          }
        }),

      updateToolDetail: (toolId, detail) =>
        set((state) => ({
          toolDetails: {
            ...state.toolDetails,
            [toolId]: { ...state.toolDetails[toolId], ...detail },
          },
        })),

      nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 4) })),
      prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),
      setStep: (step) => set({ currentStep: step }),
      reset: () =>
        set({
          teamSize: "",
          companyStage: "",
          primaryUseCase: "",
          toolUsageFrequency: "",
          aiMaturity: "",
          selectedTools: [],
          toolDetails: {},
          currentStep: 1,
        }),
    }),
    {
      name: "dexaudit-storage",
    }
  )
);
