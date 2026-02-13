import React from 'react';

// Simplified Motion components to resolve build errors and remove animations as requested.

export const FadeInUp = ({ children, className = "" }) => (
    <div className={className}>
        {children}
    </div>
);

export const FadeIn = ({ children, className = "" }) => (
    <div className={className}>
        {children}
    </div>
);

export const ScaleIn = ({ children, className = "" }) => (
    <div className={className}>
        {children}
    </div>
);

export const StaggerContainer = ({ children, className = "" }) => (
    <div className={className}>
        {children}
    </div>
);

export const StaggerItem = ({ children, className = "" }) => (
    <div className={className}>
        {children}
    </div>
);

export const HoverCard = ({ children, className = "" }) => (
    <div className={`transition-transform duration-300 hover:-translate-y-1 ${className}`}>
        {children}
    </div>
);
