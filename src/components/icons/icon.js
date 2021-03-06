import React from 'react';
import PropTypes from 'prop-types';
import {
  IconBookmark,
  IconExternal,
  IconFolder,
  IconGitHub,
  IconGitHubSquare,
  IconLinkedin,
  IconLinkedinSquare,
  IconMedium,
  IconLogo,
  IconTwitter,
  IconTwitterSquare,
  IconHamburger,
  IconYoutube,
  IconEmail,
} from '@components/icons';

const Icon = ({ name, customClass }) => {
  switch (name) {
    case 'Bookmark':
      return <IconBookmark customClass={customClass} />;
    case 'Email':
      return <IconEmail customClass={customClass} />;
    case 'External':
      return <IconExternal customClass={customClass} />;
    case 'Folder':
      return <IconFolder customClass={customClass} />;
    case 'GitHub':
      return <IconGitHub customClass={customClass} />;
    case 'GitHubSquare':
      return <IconGitHubSquare customClass={customClass} />;
    case 'Linkedin':
      return <IconLinkedin customClass={customClass} />;
    case 'LinkedinSqaure':
      return <IconLinkedinSquare customClass={customClass} />;
    case 'Logo':
      return <IconLogo customClass={customClass} />;
    case 'Medium':
      return <IconMedium customClass={customClass} />;
    case 'Twitter':
      return <IconTwitter customClass={customClass} />;
    case 'TwitterSquare':
      return <IconTwitterSquare customClass={customClass} />;
    case 'Hamburger':
      return <IconHamburger customClass={customClass} />;
    case 'Youtube':
      return <IconYoutube customClass={customClass} />;
    default:
      return <IconExternal customClass={customClass} />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default Icon;
