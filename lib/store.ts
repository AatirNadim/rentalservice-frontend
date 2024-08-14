import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {};

export type Actions = {};

export const useRentStore = create<State & Actions>()(
  persist((set) => ({}), { name: "rent-store", skipHydration: true })
);
