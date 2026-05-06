import { Fragment, useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import '../components/glossary/glossary.css';
import AuthPracticePanel from '../components/glossary/AuthPracticePanel';
import SpacingPracticePanel from '../components/glossary/SpacingPracticePanel';
import LetterSpacingPracticePanel from '../components/glossary/LetterSpacingPracticePanel';
import { getTermById, getTermDeepDiveNotes, GlossaryTerm } from '../lib/glossary';
import apiDemoHtml from '../../gif-api-demo.html?raw';
import apiPracticeHtml from '../../gif-api-practice.html?raw';
import authDemoHtml from '../../gif-auth-demo.html?raw';
import spacingDemoHtml from '../../gif-spacing-demo.html?raw';
import letterSpacingDemoHtml from '../../gif-letter-spacing-demo.html?raw';
import lineSpacingDemoHtml from '../../gif-line-spacing-demo.html?raw';
import lineSpacingPracticeHtml from '../../gif-line-spacing-practice.html?raw';
import lineheightDemoHtml from '../../gif-lineheight-demo.html?raw';
import lineheightPracticeHtml from '../../gif-lineheight-practice.html?raw';
import marginDemoHtml from '../../gif-margin-demo.html?raw';
import marginPracticeHtml from '../../gif-margin-practice.html?raw';
import paddingDemoHtml from '../../gif-padding-demo.html?raw';
import paddingPracticeHtml from '../../gif-padding-practice.html?raw';
import borderDemoHtml from '../../gif-border-demo.html?raw';
import borderPracticeHtml from '../../gif-border-practice.html?raw';
import buttonDemoHtml from '../../gif-button-demo.html?raw';
import buttonPracticeHtml from '../../gif-button-practice.html?raw';
import buttongroupDemoHtml from '../../gif-buttongroup-demo.html?raw';
import buttongroupPracticeHtml from '../../gif-buttongroup-practice.html?raw';
import radiusDemoHtml from '../../gif-radius-demo.html?raw';
import radiusPracticeHtml from '../../gif-radius-practice.html?raw';
import cornerDemoHtml from '../../gif-corner-demo.html?raw';
import cornerPracticeHtml from '../../gif-corner-practice.html?raw';
import cardDemoHtml from '../../gif-card-demo.html?raw';
import cardPracticeHtml from '../../gif-card-practice.html?raw';
import frontendDemoHtml from '../../gif-frontend-demo.html?raw';
import frontendPracticeHtml from '../../gif-frontend-practice.html?raw';
import backendDemoHtml from '../../gif-backend-demo.html?raw';
import backendPracticeHtml from '../../gif-backend-practice.html?raw';
import breadcrumbDemoHtml from '../../gif-breadcrumb-demo.html?raw';
import breadcrumbPracticeHtml from '../../gif-breadcrumb-practice.html?raw';
import databaseDemoHtml from '../../gif-database-demo.html?raw';
import databasePracticeHtml from '../../gif-database-practice.html?raw';
import componentDemoHtml from '../../gif-component-demo.html?raw';
import componentPracticeHtml from '../../gif-component-practice.html?raw';
import deployDemoHtml from '../../gif-deploy-demo.html?raw';
import deployPracticeHtml from '../../gif-deploy-practice.html?raw';
import navbarDemoHtml from '../../gif-navbar-demo.html?raw';
import navbarPracticeHtml from '../../gif-navbar-practice.html?raw';
import strokeDemoHtml from '../../gif-stroke-demo.html?raw';
import strokePracticeHtml from '../../gif-stroke-practice.html?raw';
import responsiveDemoHtml from '../../gif-responsive-demo.html?raw';
import responsivePracticeHtml from '../../gif-responsive-practice.html?raw';
import sliderDemoHtml from '../../gif-slider-demo.html?raw';
import sliderPracticeHtml from '../../gif-slider-practice.html?raw';
import dropdownDemoHtml from '../../gif-dropdown-demo.html?raw';
import dropdownPracticeHtml from '../../gif-dropdown-practice.html?raw';
import drawerDemoHtml from '../../gif-drawer-demo.html?raw';
import drawerPracticeHtml from '../../gif-drawer-practice.html?raw';
import elementDemoHtml from '../../gif-element-demo.html?raw';
import elementPracticeHtml from '../../gif-element-practice.html?raw';
import footerDemoHtml from '../../gif-footer-demo.html?raw';
import footerPracticeHtml from '../../gif-footer-practice.html?raw';
import toggleDemoHtml from '../../gif-toggle-demo.html?raw';
import togglePracticeHtml from '../../gif-toggle-practice.html?raw';
import sidebarDemoHtml from '../../gif-sidebar-demo.html?raw';
import sidebarPracticeHtml from '../../gif-sidebar-practice.html?raw';
import sectionDemoHtml from '../../gif-section-demo.html?raw';
import sectionPracticeHtml from '../../gif-section-practice.html?raw';
import accordionDemoHtml from '../../gif-accordion-demo.html?raw';
import accordionPracticeHtml from '../../gif-accordion-practice.html?raw';
import headerDemoHtml from '../../gif-header-demo.html?raw';
import headerPracticeHtml from '../../gif-header-practice.html?raw';
import breakpointDemoHtml from '../../gif-breakpoint-demo.html?raw';
import breakpointPracticeHtml from '../../gif-breakpoint-practice.html?raw';
import gridDemoHtml from '../../gif-grid-demo.html?raw';
import gridPracticeHtml from '../../gif-grid-practice.html?raw';
import gutterDemoHtml from '../../gif-gutter-demo.html?raw';
import gutterPracticeHtml from '../../gif-gutter-practice.html?raw';
import carouselDemoHtml from '../../gif-carousel-demo.html?raw';
import carouselPracticeHtml from '../../gif-carousel-practice.html?raw';
import stickyDemoHtml from '../../gif-sticky-demo.html?raw';
import stickyPracticeHtml from '../../gif-sticky-practice.html?raw';
import paginationDemoHtml from '../../gif-pagination-demo.html?raw';
import paginationPracticeHtml from '../../gif-pagination-practice.html?raw';
import popupDemoHtml from '../../gif-popup-demo.html?raw';
import popupPracticeHtml from '../../gif-popup-practice.html?raw';
import designSystemDemoHtml from '../../gif-design-system-demo.html?raw';
import designSystemPracticeHtml from '../../gif-design-system-practice.html?raw';
import skeletonDemoHtml from '../../gif-skeleton-demo.html?raw';
import skeletonPracticeHtml from '../../gif-skeleton-practice.html?raw';
import viewportDemoHtml from '../../gif-viewport-demo.html?raw';
import viewportPracticeHtml from '../../gif-viewport-practice.html?raw';
import zindexDemoHtml from '../../gif-zindex-demo.html?raw';
import zindexPracticeHtml from '../../gif-zindex-practice.html?raw';
import primaryColorDemoHtml from '../../gif-primary-color-demo.html?raw';
import primaryColorPracticeHtml from '../../gif-primary-color-practice.html?raw';
import colorPaletteDemoHtml from '../../gif-colorpalette-demo.html?raw';
import colorPalettePracticeHtml from '../../gif-colorpalette-practice.html?raw';
import heroSectionDemoHtml from '../../gif-hero-demo.html?raw';
import heroSectionPracticeHtml from '../../gif-hero-practice.html?raw';
import fontWeightDemoHtml from '../../gif-fontweight-demo.html?raw';
import fontWeightPracticeHtml from '../../gif-fontweight-practice.html?raw';
import contrastDemoHtml from '../../gif-contrast-demo.html?raw';
import contrastPracticeHtml from '../../gif-contrast-practice.html?raw';
import hierarchyDemoHtml from '../../gif-hierarchy-demo.html?raw';
import hierarchyPracticeHtml from '../../gif-hierarchy-practice.html?raw';
import opacityDemoHtml from '../../gif-opacity-demo.html?raw';
import opacityPracticeHtml from '../../gif-opacity-practice.html?raw';
import flatDesignDemoHtml from '../../gif-flatdesign-demo.html?raw';
import flatDesignPracticeHtml from '../../gif-flatdesign-practice.html?raw';
import gradientDemoHtml from '../../gif-gradient-demo.html?raw';
import gradientPracticeHtml from '../../gif-gradient-practice.html?raw';
import glassmorphismDemoHtml from '../../gif-glassmorphism-demo.html?raw';
import glassmorphismPracticeHtml from '../../gif-glassmorphism-practice.html?raw';
import spinnerDemoHtml from '../../gif-spinner-demo.html?raw';
import spinnerPracticeHtml from '../../gif-spinner-practice.html?raw';
import containerDemoHtml from '../../gif-container-demo.html?raw';
import containerPracticeHtml from '../../gif-container-practice.html?raw';
import progressbarDemoHtml from '../../gif-progressbar-demo.html?raw';
import progressbarPracticeHtml from '../../gif-progressbar-practice.html?raw';
import transitionDemoHtml from '../../gif-transition-demo.html?raw';
import transitionPracticeHtml from '../../gif-transition-practice.html?raw';
import hoverDemoHtml from '../../gif-hover-demo.html?raw';
import hoverPracticeHtml from '../../gif-hover-practice.html?raw';
import overflowDemoHtml from '../../gif-overflow-demo.html?raw';
import overflowPracticeHtml from '../../gif-overflow-practice.html?raw';
import tabbarDemoHtml from '../../gif-tabbar-demo.html?raw';
import tabbarPracticeHtml from '../../gif-tabbar-practice.html?raw';
import chipsDemoHtml from '../../gif-chips-demo.html?raw';
import chipsPracticeHtml from '../../gif-chips-practice.html?raw';
import checkboxDemoHtml from '../../gif-checkbox-demo.html?raw';
import checkboxPracticeHtml from '../../gif-checkbox-practice.html?raw';
import badgeDemoHtml from '../../gif-badge-demo.html?raw';
import badgePracticeHtml from '../../gif-badge-practice.html?raw';
import dividerDemoHtml from '../../gif-divider-demo.html?raw';
import dividerPracticeHtml from '../../gif-divider-practice.html?raw';
import listDemoHtml from '../../gif-list-demo.html?raw';
import listPracticeHtml from '../../gif-list-practice.html?raw';
import toastDemoHtml from '../../gif-toast-demo.html?raw';
import toastPracticeHtml from '../../gif-toast-practice.html?raw';
import darkmodeDemoHtml from '../../gif-darkmode-demo.html?raw';
import darkmodePracticeHtml from '../../gif-darkmode-practice.html?raw';
import whitespaceDemoHtml from '../../gif-whitespace-demo.html?raw';
import whitespacePracticeHtml from '../../gif-whitespace-practice.html?raw';
import snackbarDemoHtml from '../../gif-snackbar-demo.html?raw';
import snackbarPracticeHtml from '../../gif-snackbar-practice.html?raw';
import textfieldDemoHtml from '../../gif-textfield-demo.html?raw';
import textfieldPracticeHtml from '../../gif-textfield-practice.html?raw';
import menusDemoHtml from '../../gif-menus-demo.html?raw';
import menusPracticeHtml from '../../gif-menus-practice.html?raw';
import shapeDemoHtml from '../../gif-shape-demo.html?raw';
import shapePracticeHtml from '../../gif-shape-practice.html?raw';
import splitButtonDemoHtml from '../../gif-split-button-demo.html?raw';
import splitButtonPracticeHtml from '../../gif-split-button-practice.html?raw';
import arrayDemoHtml from '../../gif-array-demo.html?raw';
import arrayPracticeHtml from '../../gif-array-practice.html?raw';
import segmentedButtonDemoHtml from '../../gif-segmented-button-demo.html?raw';
import segmentedButtonPracticeHtml from '../../gif-segmented-button-practice.html?raw';
import iconButtonDemoHtml from '../../gif-icon-button-demo.html?raw';
import iconButtonPracticeHtml from '../../gif-icon-button-practice.html?raw';
import navigationDemoHtml from '../../gif-navigation-demo.html?raw';
import navigationPracticeHtml from '../../gif-navigation-practice.html?raw';
import alignDemoHtml from '../../gif-align-demo.html?raw';
import alignPracticeHtml from '../../gif-align-practice.html?raw';
import booleanDemoHtml from '../../gif-boolean-demo.html?raw';
import booleanPracticeHtml from '../../gif-boolean-practice.html?raw';
import assetDemoHtml from '../../gif-asset-demo.html?raw';
import assetPracticeHtml from '../../gif-asset-practice.html?raw';
import cacheDemoHtml from '../../gif-cache-demo.html?raw';
import cachePracticeHtml from '../../gif-cache-practice.html?raw';
import cliDemoHtml from '../../gif-cli-demo.html?raw';
import cliPracticeHtml from '../../gif-cli-practice.html?raw';
import cssDemoHtml from '../../gif-css-demo.html?raw';
import cssPracticeHtml from '../../gif-css-practice.html?raw';
import commitPracticeHtml from '../../gif-commit-practice.html?raw';
import contextDemoHtml from '../../gif-context-demo.html?raw';
import contextPracticeHtml from '../../gif-context-practice.html?raw';
import envDemoHtml from '../../gif-env-demo.html?raw';
import envPracticeHtml from '../../gif-env-practice.html?raw';
import commitDemoHtml from '../../gif-commit-demo.html?raw';
import gitDemoHtml from '../../gif-git-demo.html?raw';
import gitPracticeHtml from '../../gif-git-practice.html?raw';
import sslDemoHtml from '../../gif-ssl-demo.html?raw';
import sslPracticeHtml from '../../gif-ssl-practice.html?raw';


// Final sync for viewport practice update
export default function GlossaryTermDetailPage() {
  const { termId } = useParams<{ termId: string }>();
  const term = termId ? getTermById(termId) : undefined;

  useEffect(() => {
    if (!term) return;
    document.title = `${term.name} · Từ điển chuyên ngành · markAI.vn`;
  }, [term]);

  if (!term) {
    return <Navigate to="/tu-dien-thuat-ngu" replace />;
  }


  const getInteractiveHtml = (id: string) => {
    const cleanId = id.trim().toLowerCase();
    switch (cleanId) {
      case 'api': return apiDemoHtml;
      case 'auth': return authDemoHtml;
      case 'spacing': return spacingDemoHtml;
      case 'letter-spacing': return letterSpacingDemoHtml;
      case 'line-spacing': return lineSpacingDemoHtml;
      case 'line-height': return lineheightDemoHtml;
      case 'margin': return marginDemoHtml;
      case 'padding': return paddingDemoHtml;
      case 'border': return borderDemoHtml;
      case 'button': return buttonDemoHtml;
      case 'button-group': return buttongroupDemoHtml;
      case 'radius': return radiusDemoHtml;
      case 'corner': return cornerDemoHtml;
      case 'css': return cssDemoHtml;
      case 'card': return cardDemoHtml;
      case 'frontend': return frontendDemoHtml;
      case 'backend': return backendDemoHtml;
      case 'breadcrumb': return breadcrumbDemoHtml;
      case 'database': return databaseDemoHtml;
      case 'component': return componentDemoHtml;
      case 'deploy': return deployDemoHtml;
      case 'navbar': return navbarDemoHtml;
      case 'stroke': return strokeDemoHtml;
      case 'responsive': return responsiveDemoHtml;
      case 'slider': return sliderDemoHtml;
      case 'dropdown': return dropdownDemoHtml;
      case 'drawer': return drawerDemoHtml;
      case 'element': return elementDemoHtml;
      case 'footer': return footerDemoHtml;
      case 'toggle': return toggleDemoHtml;
      case 'sidebar': return sidebarDemoHtml;
      case 'section': return sectionDemoHtml;
      case 'accordion': return accordionDemoHtml;
      case 'header': return headerDemoHtml;
      case 'breakpoint': return breakpointDemoHtml;
      case 'grid': return gridDemoHtml;
      case 'gutter': return gutterDemoHtml;
      case 'carousel': return carouselDemoHtml;
      case 'sticky': return stickyDemoHtml;
      case 'pagination': return paginationDemoHtml;
      case 'popup': return popupDemoHtml;
      case 'design-system': return designSystemDemoHtml;
      case 'skeleton': return skeletonDemoHtml;
      case 'viewport': return viewportDemoHtml;
      case 'z-index': return zindexDemoHtml;
      case 'primary-color': return primaryColorDemoHtml;
      case 'color-palette': return colorPaletteDemoHtml;
      case 'hero-section': return heroSectionDemoHtml;
      case 'fontweight': return fontWeightDemoHtml;
      case 'contrast': return contrastDemoHtml;
      case 'hierarchy': return hierarchyDemoHtml;
      case 'opacity': return opacityDemoHtml;
      case 'flat-design': return flatDesignDemoHtml;
      case 'gradient': return gradientDemoHtml;
      case 'glassmorphism': return glassmorphismDemoHtml;
      case 'spinner': return spinnerDemoHtml;
      case 'container': return containerDemoHtml;
      case 'progressbar': return progressbarDemoHtml;
      case 'transition': return transitionDemoHtml;
      case 'hover': return hoverDemoHtml;
      case 'overflow': return overflowDemoHtml;
      case 'tab-bar': return tabbarDemoHtml;
      case 'chips': return chipsDemoHtml;
      case 'checkbox': return checkboxDemoHtml;
      case 'badge': return badgeDemoHtml;
      case 'divider': return dividerDemoHtml;
      case 'list': return listDemoHtml;
      case 'toast-notification': return toastDemoHtml;
      case 'dark-mode': return darkmodeDemoHtml;
      case 'whitespace': return whitespaceDemoHtml;
      case 'snackbar': return snackbarDemoHtml;
      case 'text-fields': return textfieldDemoHtml;
      case 'menus': return menusDemoHtml;
      case 'shape': return shapeDemoHtml;
      case 'split-buttons': return splitButtonDemoHtml;
      case 'array': return arrayDemoHtml;
      case 'segmented-button': return segmentedButtonDemoHtml;
      case 'icon-button': return iconButtonDemoHtml;
      case 'navigation': return navigationDemoHtml;
      case 'align': return alignDemoHtml;
      case 'boolean': return booleanDemoHtml;
      case 'asset': return assetDemoHtml;
      case 'cache': return cacheDemoHtml;
      case 'cli': return cliDemoHtml;
      case 'git': return gitDemoHtml;
      case 'commit': return commitDemoHtml;
      case 'context': return contextDemoHtml;
      case 'env': return envDemoHtml;
      case 'ssl': return sslDemoHtml;
      default: return null;
    }
  };

  const getPracticeHtml = (id: string) => {
    const cleanId = id.trim().toLowerCase();
    switch (cleanId) {
      case 'api': return apiPracticeHtml;
      case 'margin': return marginPracticeHtml;
      case 'padding': return paddingPracticeHtml;
      case 'line-spacing': return lineSpacingPracticeHtml;
      case 'line-height': return lineheightPracticeHtml;
      case 'border': return borderPracticeHtml;
      case 'css': return cssPracticeHtml;
      case 'button': return buttonPracticeHtml;
      case 'button-group': return buttongroupPracticeHtml;
      case 'radius': return radiusPracticeHtml;
      case 'corner': return cornerPracticeHtml;
      case 'card': return cardPracticeHtml;
      case 'frontend': return frontendPracticeHtml;
      case 'backend': return backendPracticeHtml;
      case 'breadcrumb': return breadcrumbPracticeHtml;
      case 'database': return databasePracticeHtml;
      case 'component': return componentPracticeHtml;
      case 'deploy': return deployPracticeHtml;
      case 'navbar': return navbarPracticeHtml;
      case 'stroke': return strokePracticeHtml;
      case 'responsive': return responsivePracticeHtml;
      case 'slider': return sliderPracticeHtml;
      case 'dropdown': return dropdownPracticeHtml;
      case 'drawer': return drawerPracticeHtml;
      case 'element': return elementPracticeHtml;
      case 'footer': return footerPracticeHtml;
      case 'toggle': return togglePracticeHtml;
      case 'sidebar': return sidebarPracticeHtml;
      case 'section': return sectionPracticeHtml;
      case 'accordion': return accordionPracticeHtml;
      case 'header': return headerPracticeHtml;
      case 'breakpoint': return breakpointPracticeHtml;
      case 'grid': return gridPracticeHtml;
      case 'gutter': return gutterPracticeHtml;
      case 'carousel': return carouselPracticeHtml;
      case 'sticky': return stickyPracticeHtml;
      case 'pagination': return paginationPracticeHtml;
      case 'popup': return popupPracticeHtml;
      case 'design-system': return designSystemPracticeHtml;
      case 'skeleton': return skeletonPracticeHtml;
      case 'viewport': return viewportPracticeHtml;
      case 'z-index': return zindexPracticeHtml;
      case 'primary-color': return primaryColorPracticeHtml;
      case 'color-palette': return colorPalettePracticeHtml;
      case 'hero-section': return heroSectionPracticeHtml;
      case 'fontweight': return fontWeightPracticeHtml;
      case 'contrast': return contrastPracticeHtml;
      case 'hierarchy': return hierarchyPracticeHtml;
      case 'opacity': return opacityPracticeHtml;
      case 'flat-design': return flatDesignPracticeHtml;
      case 'gradient': return gradientPracticeHtml;
      case 'glassmorphism': return glassmorphismPracticeHtml;
      case 'spinner': return spinnerPracticeHtml;
      case 'container': return containerPracticeHtml;
      case 'progressbar': return progressbarPracticeHtml;
      case 'transition': return transitionPracticeHtml;
      case 'hover': return hoverPracticeHtml;
      case 'overflow': return overflowPracticeHtml;
      case 'tab-bar': return tabbarPracticeHtml;
      case 'chips': return chipsPracticeHtml;
      case 'checkbox': return checkboxPracticeHtml;
      case 'badge': return badgePracticeHtml;
      case 'divider': return dividerPracticeHtml;
      case 'list': return listPracticeHtml;
      case 'toast-notification': return toastPracticeHtml;
      case 'dark-mode': return darkmodePracticeHtml;
      case 'whitespace': return whitespacePracticeHtml;
      case 'snackbar': return snackbarPracticeHtml;
      case 'text-fields': return textfieldPracticeHtml;
      case 'menus': return menusPracticeHtml;
      case 'shape': return shapePracticeHtml;
      case 'split-buttons': return splitButtonPracticeHtml;
      case 'array': return arrayPracticeHtml;
      case 'segmented-button': return segmentedButtonPracticeHtml;
      case 'icon-button': return iconButtonPracticeHtml;
      case 'navigation': return navigationPracticeHtml;
      case 'align': return alignPracticeHtml;
      case 'boolean': return booleanPracticeHtml;
      case 'asset': return assetPracticeHtml;
      case 'cache': return cachePracticeHtml;
      case 'cli': return cliPracticeHtml;
      case 'git': return gitPracticeHtml;
      case 'commit': return commitPracticeHtml;
      case 'context': return contextPracticeHtml;
      case 'env': return envPracticeHtml;
      case 'ssl': return sslPracticeHtml;
      default: return null;
    }
  };

  const interactiveDemoHtml = getInteractiveHtml(term.id);
  const interactivePracticeHtml = getPracticeHtml(term.id);


  const extendedTerms = (term.id === 'spacing' || term.id === 'letter-spacing')
    ? [
        term.id === 'spacing' ? getTermById('letter-spacing') : null,
        getTermById('line-spacing')
      ].filter((t): t is GlossaryTerm => !!t && t.id !== term.id)
    : [];

  return (
    <div className="glossary-page bg-[var(--bg)] text-ink">
      <TermDisplaySection 
        term={term} 
        interactiveDemoHtml={interactiveDemoHtml}
        interactivePracticeHtml={interactivePracticeHtml}
        showBackLink={true}
      />

      {extendedTerms.map((extTerm) => (
        <Fragment key={extTerm.id}>
          <TermDisplaySection 
            term={extTerm} 
            interactiveDemoHtml={getInteractiveHtml(extTerm.id)}
            interactivePracticeHtml={getPracticeHtml(extTerm.id)}
          />
        </Fragment>
      ))}
    </div>
  );
}

interface TermDisplaySectionProps {
  term: any;
  interactiveDemoHtml?: string | null;
  interactivePracticeHtml?: string | null;
  showBackLink?: boolean;
}

interface InteractiveFrameProps {
  html: string;
  title: string;
  caption?: string;
}

function InteractiveFrame({ html, title, caption }: InteractiveFrameProps) {
  const frameRef = useRef<HTMLIFrameElement | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  const syncHeight = () => {
    const frame = frameRef.current;
    const doc = frame?.contentDocument;
    if (!frame || !doc) return;

    const root = doc.getElementById('app-root');
    const nextHeight = Math.ceil(
      root 
        ? root.getBoundingClientRect().height 
        : Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)
    );
    
    const currentHeight = parseInt(frame.style.height || '0', 10);
    // Reduce threshold to 5px for tighter height
    if (Math.abs(currentHeight - nextHeight) > 5) {
      frame.style.height = `${nextHeight}px`;
    }
  };

  const bindAutoHeight = () => {
    observerRef.current?.disconnect();
    const frame = frameRef.current;
    const doc = frame?.contentDocument;
    if (!frame || !doc) return;

    syncHeight();

    const resizeObserver = new ResizeObserver(() => {
      syncHeight();
    });

    resizeObserver.observe(doc.documentElement);
    resizeObserver.observe(doc.body);
    observerRef.current = resizeObserver;

    if (doc.fonts?.ready) {
      void doc.fonts.ready.then(() => syncHeight());
    }

    frame.contentWindow?.addEventListener('resize', syncHeight);
  };

  useEffect(() => {
    if (!html) return;
    const timer = window.setTimeout(bindAutoHeight, 100);
    window.addEventListener('resize', syncHeight);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', syncHeight);
      frameRef.current?.contentWindow?.removeEventListener('resize', syncHeight);
      observerRef.current?.disconnect();
    };
  }, [html]);

  return (
    <div className="glossary-demo-frame-wrap">
      <iframe
        ref={frameRef}
        title={title}
        srcDoc={html}
        className="glossary-demo-frame"
        sandbox="allow-scripts allow-same-origin"
        scrolling="no"
        onLoad={bindAutoHeight}
      />
      {caption ? (
        <p className="border-t border-border px-4 py-3 font-sans text-[12px] leading-[1.65] text-ink2">
          {caption}
        </p>
      ) : null}
    </div>
  );
}

function TermDisplaySection({ 
  term, 
  interactiveDemoHtml, 
  interactivePracticeHtml,
  showBackLink = false 
}: TermDisplaySectionProps) {
  const deepDiveNotes = getTermDeepDiveNotes(term);
  const practiceCaption = undefined;
  return (
    <section className="border-b border-border">
      <div className="page-shell grid gap-0 lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] items-start">
        <div className="border-b border-border px-[1.2rem] py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-14 lg:sticky lg:top-[52px] lg:h-fit">
          {showBackLink && (
            <Link
              to="/tu-dien-thuat-ngu"
              className="inline-flex items-center border border-[var(--ink)] bg-[var(--ink)] px-[10px] py-[7px] font-mono text-[10px] uppercase tracking-[0.04em] text-[var(--bg)] no-underline transition-colors hover:border-accent hover:bg-accent hover:text-[var(--ink)] active:border-accent active:bg-accent active:text-[var(--ink)]"
            >
              ← Quay lại từ điển
            </Link>
          )}
          <h1 className={`${showBackLink ? 'mt-5' : 'mt-0'} font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.95]`}>{term.name}</h1>
          <p className="mt-3 font-mono text-[11px] tracking-[0.04em] text-muted">{term.nameEn}</p>
          <p className="mt-8 max-w-[46rem] font-sans text-[17px] leading-[1.8] text-ink2">{term.definition}</p>

          {deepDiveNotes.length ? (
            <div className="mt-8 max-w-[52rem] border-l-2 border-l-accent bg-bg2 px-4 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted">Hiểu nhanh</p>
              <div className="mt-3 space-y-3">
                {deepDiveNotes.map((note) => (
                  <p key={note} className="font-sans text-[14px] leading-[1.75] text-ink2">
                    {note}
                  </p>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-10 max-w-[52rem]">
            <p className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted">Ví dụ thực tế</p>
            <div className="mt-4">
              {term.example.includes('Prompt:') ? (
                (() => {
                  const [desc, prompt] = term.example.split('Prompt:');
                  return (
                    <>
                      <p className="font-sans text-[15px] leading-[1.8] text-ink2 mb-4">{desc}</p>
                      <div className="terminal-box">
                        <div className="terminal-header">
                          <div className="terminal-dot red" />
                          <div className="terminal-dot yellow" />
                          <div className="terminal-dot green" />
                        </div>
                        <div className="terminal-content">
                          <span className="prompt-sym">$</span>
                          <span className="opacity-50 text-[#c9c9c9] mr-1">Prompt:</span>
                          <span className="text-accent">{prompt}</span>
                          <span className="terminal-cursor" />
                        </div>
                      </div>
                    </>
                  );
                })()
              ) : (
                <div className="terminal-box">
                  <div className="terminal-header">
                    <div className="terminal-dot red" />
                    <div className="terminal-dot yellow" />
                    <div className="terminal-dot green" />
                  </div>
                  <div className="terminal-content">
                    <span className="prompt-sym">$</span>
                    {term.example}
                    <span className="terminal-cursor" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="px-[1.2rem] py-10 lg:px-8 lg:py-14">
          <div className="mt-8 border border-[#2a2a33] bg-[#0f0f12]">
            <div className="flex items-center justify-between border-b border-[#2a2a33] bg-[#e88c2e] px-4 py-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.05em] text-[#0f0f12]">Demo / GIF</span>
              <span className="font-mono text-[10px] font-bold text-[#0f0f12]">{term.name}</span>
            </div>
            {term.demo?.kind === 'interactive' && interactiveDemoHtml ? (
              <InteractiveFrame
                html={interactiveDemoHtml}
                title={term.demo.alt ?? `${term.name} demo`}
                caption={term.demo.caption}
              />
            ) : term.demo?.src ? (
              <img src={term.demo.src} alt={term.demo.alt ?? `${term.name} demo`} className="block aspect-[4/3] w-full object-cover" />
            ) : (
              <div className="glossary-demo-placeholder p-4">
                <div className="aspect-[4/3] border border-border bg-[var(--bg2)]" />
                <p className="mt-4 font-sans text-[12px] leading-[1.65] text-ink2">
                  {term.id === 'letter-spacing' 
                    ? "Phần mô phỏng Letter Spacing đang được hoàn thiện. GIF sẽ được cập nhật sớm."
                    : "Trang riêng này đang chừa sẵn chỗ cho GIF mô phỏng chi tiết của term phức tạp."}
                </p>
              </div>
            )}
          </div>
          {interactivePracticeHtml ? (
            <div className="mt-6 border border-[#2a2a33] bg-[#0f0f12]">
              <div className="flex items-center justify-between border-b border-[#2a2a33] bg-[#e88c2e] px-4 py-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.05em] text-[#0f0f12]">Thực hành / GIF</span>
                <span className="font-mono text-[10px] font-bold text-[#0f0f12]">{term.name}</span>
              </div>
              <InteractiveFrame
                html={interactivePracticeHtml}
                title={`${term.name} practice`}
                caption={practiceCaption}
              />
            </div>
          ) : null}
          {term.id === 'auth' ? <AuthPracticePanel /> : null}
          {term.id === 'spacing' ? <SpacingPracticePanel /> : null}
          {term.id === 'letter-spacing' ? <LetterSpacingPracticePanel /> : null}
        </div>
      </div>
    </section>
  );
}
