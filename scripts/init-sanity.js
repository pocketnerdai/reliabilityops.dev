#!/usr/bin/env node

/**
 * Sanity Project Initialization Script
 * Run this to set up your Sanity project for the first time
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function initSanity() {
  console.log('🚀 ReliabilityOps Sanity Setup\n');
  
  // Check if .env exists
  const envPath = path.join(process.cwd(), '.env');
  const envExists = fs.existsSync(envPath);
  
  if (!envExists) {
    console.log('Creating .env file from template...');
    const envExample = fs.readFileSync('.env.example', 'utf8');
    fs.writeFileSync('.env', envExample);
  }

  console.log('This script will help you set up your Sanity project.\n');
  
  const choice = await question(
    'Choose an option:\n' +
    '1. Initialize a new Sanity project (recommended for first-time setup)\n' +
    '2. Use existing Sanity project (if you already created one on sanity.io)\n' +
    'Enter your choice (1 or 2): '
  );

  if (choice === '1') {
    console.log('\n📦 Initializing new Sanity project...\n');
    
    try {
      // Initialize Sanity project
      execSync('npx sanity@latest init --bare --no-install', {
        stdio: 'inherit',
        cwd: process.cwd()
      });
      
      console.log('\n✅ Sanity project created!\n');
      console.log('Please check the project ID that was generated and update your .env file.\n');
      
    } catch (error) {
      console.error('Error initializing Sanity:', error.message);
    }
  } else if (choice === '2') {
    const projectId = await question('\nEnter your Sanity project ID: ');
    const dataset = await question('Enter your dataset name (default: production): ') || 'production';
    
    // Update .env file
    let envContent = fs.readFileSync(envPath, 'utf8');
    envContent = envContent.replace(/PUBLIC_SANITY_PROJECT_ID=.*/, `PUBLIC_SANITY_PROJECT_ID=${projectId}`);
    envContent = envContent.replace(/PUBLIC_SANITY_DATASET=.*/, `PUBLIC_SANITY_DATASET=${dataset}`);
    fs.writeFileSync(envPath, envContent);
    
    // Update config files
    updateConfigFiles(projectId, dataset);
    
    console.log('\n✅ Configuration updated!\n');
  }

  console.log('Next steps:');
  console.log('1. Run "npm run build" to rebuild the site');
  console.log('2. Visit your Sanity Studio to create content');
  console.log('3. The blog pages will automatically display your Sanity content\n');
  
  rl.close();
}

function updateConfigFiles(projectId, dataset) {
  // Update astro.config.mjs
  const astroConfigPath = path.join(process.cwd(), 'astro.config.mjs');
  let astroConfig = fs.readFileSync(astroConfigPath, 'utf8');
  astroConfig = astroConfig.replace(/projectId: '.*'/, `projectId: '${projectId}'`);
  astroConfig = astroConfig.replace(/dataset: '.*'/, `dataset: '${dataset}'`);
  fs.writeFileSync(astroConfigPath, astroConfig);
  
  // Update sanity.config.ts
  const sanityConfigPath = path.join(process.cwd(), 'sanity.config.ts');
  let sanityConfig = fs.readFileSync(sanityConfigPath, 'utf8');
  sanityConfig = sanityConfig.replace(/projectId: '.*'/, `projectId: '${projectId}'`);
  sanityConfig = sanityConfig.replace(/dataset: '.*'/, `dataset: '${dataset}'`);
  fs.writeFileSync(sanityConfigPath, sanityConfig);
  
  // Update studio redirect
  const studioPath = path.join(process.cwd(), 'src/pages/studio.astro');
  let studioContent = fs.readFileSync(studioPath, 'utf8');
  studioContent = studioContent.replace(/https:\/\/.*\.sanity\.studio/g, `https://${projectId}.sanity.studio`);
  fs.writeFileSync(studioPath, studioContent);
}

// Run the script
initSanity().catch(console.error);