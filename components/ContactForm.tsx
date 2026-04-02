'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  service: z.enum(["construction", "electrical", "plumbing", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  return (
    <section className="py-32 bg-industrial text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand text-xs font-bold tracking-[0.4em] uppercase mb-4 block"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-5xl md:text-7xl mb-8 leading-none">Ready to start <br /> your build?</h2>
            <p className="text-white/50 text-lg max-w-md leading-relaxed mb-12">
              Contact our engineering team today for a comprehensive consultation on your next project.
            </p>
            
            <div className="space-y-8">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-brand mb-2">Office</div>
                <div className="text-xl">9 Langford Street <br /> Banya, 4551</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-brand mb-2">Contact</div>
                <div className="text-xl">0476310454 <br /> info@zkcg.com.au</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input 
                        {...register("name")}
                        placeholder="Name"
                        className="w-full bg-white/5 border-b border-white/20 px-0 py-4 outline-none focus:border-brand transition-colors peer placeholder-transparent"
                      />
                      <label className="absolute left-0 top-4 text-white/30 pointer-events-none transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px]">Name</label>
                      {errors.name && <span className="text-brand text-[10px] mt-1 uppercase">{errors.name.message}</span>}
                    </div>
                    <div className="relative">
                      <input 
                        {...register("email")}
                        placeholder="Email"
                        className="w-full bg-white/5 border-b border-white/20 px-0 py-4 outline-none focus:border-brand transition-colors peer placeholder-transparent"
                      />
                      <label className="absolute left-0 top-4 text-white/30 pointer-events-none transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px]">Email</label>
                      {errors.email && <span className="text-brand text-[10px] mt-1 uppercase">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="relative">
                    <select 
                      {...register("service")}
                      defaultValue=""
                      className="w-full bg-white/5 border-b border-white/20 px-0 py-4 outline-none focus:border-brand transition-colors appearance-none text-white/70"
                    >
                      <option value="" disabled className="bg-industrial">Select Service</option>
                      <option value="construction" className="bg-industrial">Construction</option>
                      <option value="electrical" className="bg-industrial">Electrical</option>
                      <option value="plumbing" className="bg-industrial">Plumbing</option>
                      <option value="other" className="bg-industrial">Other</option>
                    </select>
                    {errors.service && <span className="text-brand text-[10px] mt-1 uppercase">{errors.service.message}</span>}
                  </div>

                  <div className="relative">
                    <textarea 
                      {...register("message")}
                      placeholder="Message"
                      rows={4}
                      className="w-full bg-white/5 border-b border-white/20 px-0 py-4 outline-none focus:border-brand transition-colors peer placeholder-transparent resize-none"
                    />
                    <label className="absolute left-0 top-4 text-white/30 pointer-events-none transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px]">Message</label>
                    {errors.message && <span className="text-brand text-[10px] mt-1 uppercase">{errors.message.message}</span>}
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-brand py-6 font-display tracking-widest hover:bg-white hover:text-industrial transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? "SENDING..." : (
                      <>
                        SEND REQUEST <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 p-12 text-center border border-brand/20"
                >
                  <CheckCircle2 className="w-16 h-16 text-brand mx-auto mb-6" />
                  <h3 className="text-3xl mb-4">Request Received</h3>
                  <p className="text-white/50">Our engineering team will review your project and contact you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-brand text-[10px] uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
