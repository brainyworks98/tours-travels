import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Send } from "lucide-react";

interface InquiryFormProps {
  defaultDestination?: string;
  compact?: boolean;
}

const InquiryForm = ({ defaultDestination, compact }: InquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: defaultDestination || "",
    travelDate: "",
    people: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.destination) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Inquiry submitted! We'll contact you within 24 hours.");
    setFormData({ name: "", phone: "", email: "", destination: defaultDestination || "", travelDate: "", people: "" });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input id="name" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone *</Label>
        <Input id="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      </div>
      <div className="space-y-2">
        <Label>Destination *</Label>
        <Select value={formData.destination} onValueChange={(v) => setFormData({ ...formData, destination: v })}>
          <SelectTrigger><SelectValue placeholder="Select destination" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="manali">Manali</SelectItem>
            <SelectItem value="goa">Goa</SelectItem>
            <SelectItem value="both">Both</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="travelDate">Travel Date</Label>
        <Input id="travelDate" type="date" value={formData.travelDate} onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="people">No. of People</Label>
        <Input id="people" type="number" min="1" placeholder="2" value={formData.people} onChange={(e) => setFormData({ ...formData, people: e.target.value })} />
      </div>
      <div className={compact ? "" : "md:col-span-2"}>
        <Button type="submit" className="w-full bg-gradient-sunset text-accent-foreground hover:opacity-90" disabled={isSubmitting}>
          <Send className="w-4 h-4 mr-2" />
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
      </div>
    </form>
  );
};

export default InquiryForm;
