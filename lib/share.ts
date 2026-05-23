import { AuditResult } from "./audit-engine"

/**
 * Encodes audit data into a URL-safe Base64 string.
 * For a prototype, this allows "stateless" sharing without a DB.
 */
export function encodeAuditData(data: {
  teamSize: string
  companyStage: string
  results: AuditResult[]
}) {
  try {
    const jsonString = JSON.stringify(data)
    // Using btoa in browser or Buffer in Node
    return btoa(encodeURIComponent(jsonString))
  } catch (e) {
    console.error("Failed to encode audit data", e)
    return ""
  }
}

/**
 * Decodes a Base64 string back into audit data.
 */
export function decodeAuditData(encoded: string): {
  teamSize: string
  companyStage: string
  results: AuditResult[]
} | null {
  try {
    const jsonString = decodeURIComponent(atob(encoded))
    return JSON.parse(jsonString)
  } catch (e) {
    console.error("Failed to decode audit data", e)
    return null
  }
}
