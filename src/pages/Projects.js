import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './Projects.css';

const projects = [
    {
        title: 'Blackboard UX Redesign',
        description: 'A redesign of Blackboard’s student portal to improve usability and accessibility.',
        details: `Redesigned Blackboard to consolidate essential content like courses, announcements, and activity into one hub. 
        Added accessibility features like a notes mode, simplified navigation, and centralized resources. 
        Conducted surveys with 12 students to identify key pain points and iterated based on feedback.`,
        tags: ['UX Design', 'Accessibility', 'Case Study'],
        pdf: '/blackboard.pdf'
    },
    {
        title: 'Recipe Finder',
        description: 'A mobile app to discover recipes with filters, pantry tracking, and notifications.',
        details: `Built with SwiftUI, this app supports recipe discovery with dietary/time filters, swipe-based pantry and cart management, nutrition analysis, and reminders. It's localized in English and Chinese and optimized for performance and accessibility.`,
        tags: ['Swift', 'iOS', 'Localization', 'UX'],
        pdf: '/recipe-finder.pdf'
    }
];

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [pdfModalOpen, setPdfModalOpen] = useState(false);
    const [activePdf, setActivePdf] = useState('');
    const isMobile = window.innerWidth <= 768;

    return (
        <div className="projects-page">
            <div className="top-part">
                <h1>My Projects</h1>
                {!isMobile && <h3>Click on each card to view the project PDFs and learn about the process!</h3>}
            </div>

            <div className="project-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        onClick={() => {
                            if (!isMobile && project.pdf) {
                                setActivePdf(project.pdf);
                                setPdfModalOpen(true);
                            }
                        }}
                    >
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="tags">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}
                        </div>
                        {expandedIndex === index && (
                            <div className="project-details">
                                <p>{project.details}</p>
                            </div>
                        )}
                        <button
                            className="learn-more-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                setExpandedIndex(index === expandedIndex ? null : index);
                            }}
                        >
                            {expandedIndex === index ? 'Show Less' : 'Read More'}
                        </button>

                        {/* PDF View Button */}
                        {isMobile ? (
                            <a
                                href={process.env.PUBLIC_URL + project.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="learn-more-btn">View PDF</button>
                            </a>
                        ) : (
                            <button
                                className="learn-more-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActivePdf(project.pdf);
                                    setPdfModalOpen(true);
                                }}
                            >
                                View PDF
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* PDF Modal */}
            {pdfModalOpen && (
                <div className="pdf-modal-backdrop" onClick={() => setPdfModalOpen(false)}>
                    <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={() => setPdfModalOpen(false)}>✕</button>
                        <Document
                            file={process.env.PUBLIC_URL + activePdf}
                            onLoadError={console.error}
                            loading={<p>Loading PDF…</p>}
                        >
                            <Page pageNumber={1} width={800} />
                        </Document>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
