"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { FOOTER_COLUMNS } from "@/data/navigation";

export function Footer() {
  return (
    <footer id="resources" className="border-t border-slate-200/80 pt-16 pb-12 bg-white/50 backdrop-blur-sm">
      <div className="site-shell">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-200/80">
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-3">
              <Logo size="md" />
            </Link>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              AI voice agents for outbound sales and inbound support calls.
            </p>
          </div>

          {/* Links Columns (Product, Resources, Company) */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold text-gray-900 mb-4 tracking-tight">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Demo scope */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="text-xs font-semibold text-gray-900 mb-1.5 tracking-tight">
              Website preview
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Explore the product concept and scripted call demo. Live calling and contact delivery require separate services.
            </p>
          </div>
        </div>

        {/* Bottom copyright and social */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>CallAgentix website preview</div>


        </div>
      </div>
    </footer>
  );
}
