# Security Guidelines for ReliabilityOps.dev

## Environment Variables and Secrets Management

### Never Commit Secrets
- **NEVER** commit `.env` files containing real credentials
- Always use `.env.example` as a template
- All `.env*` files (except `.env.example`) are gitignored

### Setting Up Environment Variables

1. **Local Development**
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Edit .env with your actual values
   # This file will NOT be committed to git
   ```

2. **Production (Cloudflare Pages)**
   - Go to Cloudflare Pages dashboard
   - Navigate to Settings > Environment variables
   - Add each variable from `.env.example`
   - Use the "Encrypt" option for sensitive values

### Required Environment Variables

| Variable | Description | Sensitive |
|----------|-------------|-----------|
| `PUBLIC_SANITY_PROJECT_ID` | Sanity project ID | No |
| `PUBLIC_SANITY_DATASET` | Dataset name (e.g., production) | No |
| `SANITY_API_READ_TOKEN` | API token for private datasets | Yes |

### Best Practices

1. **Use Environment-Specific Files**
   - `.env` - Local development
   - `.env.production` - Production values (if needed locally)
   - Never commit any of these files

2. **Rotate Keys Regularly**
   - Change API tokens periodically
   - Update both local and production environments

3. **Minimal Permissions**
   - Use read-only tokens where possible
   - Create dataset-specific tokens

4. **Audit Access**
   - Review who has access to production secrets
   - Use Cloudflare's audit logs

### If You Accidentally Commit Secrets

1. **Immediately revoke** the exposed credentials
2. **Generate new** credentials
3. **Remove from history** using:
   ```bash
   git filter-branch --force --index-filter \
   "git rm --cached --ignore-unmatch .env" \
   --prune-empty --tag-name-filter cat -- --all
   ```
4. **Force push** to all remotes
5. **Notify** your team

### Additional Security Measures

- Enable 2FA on all service accounts
- Use separate Sanity datasets for dev/prod
- Monitor API usage for anomalies
- Implement CORS restrictions where applicable