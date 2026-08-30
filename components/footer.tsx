import { contactInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <span className="text-black font-bold text-sm font-heading">SB</span>
              </div>
              <span className="font-heading text-lg tracking-tight text-white">
                SOHAN BASANTANI
              </span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
              Crafting cinematic visual stories. Professional video editing, motion design,
              podcast production, and color grading for brands, films, and digital platforms.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-white text-sm mb-6">Navigate</h4>
            <ul className="space-y-3">
              <li><a href="#work" className="text-neutral-500 text-sm hover:text-white transition-colors">Work</a></li>
              <li><a href="#about" className="text-neutral-500 text-sm hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-neutral-500 text-sm hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-neutral-500 text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white text-sm mb-6">Contact</h4>
            <ul className="space-y-3">
              <li><a href={`mailto:${contactInfo.email}`} className="text-neutral-500 text-sm hover:text-white transition-colors">{contactInfo.email}</a></li>
              {contactInfo.phone && <li><span className="text-neutral-500 text-sm">{contactInfo.phone}</span></li>}
              <li><span className="text-neutral-500 text-sm">{contactInfo.location}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs">&copy; {new Date().getFullYear()} Sohan Basantani. All rights reserved.</p>
          <div className="flex gap-6">
            {contactInfo.social.map((s) => (
              <a key={s.platform} href={s.url} className="text-neutral-600 hover:text-white transition-colors text-xs">
                {s.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}