"use client";

import { useContactModal } from "@/context/ContactModalContext";
import ContactModal from "./ContactModal";

export default function ContactModalPortal() {
  const { isOpen, closeModal } = useContactModal();

  return <ContactModal isOpen={isOpen} onClose={closeModal} />;
}
