export type Language = 'en' | 'es' | 'it' | 'sv' | 'de'

const en = {
    // ─── Nav / UI ───────────────────────────────────────────────────────────────
    'nav.edit': '+ EDIT',
    'nav.toc': 'TABLE OF CONTENTS',
    'nav.skip': 'Skip',
    'nav.startPresentation': 'Start presentation',

    // ─── Slide labels (TOC) ────────────────────────────────────────────────────
    'slide.cover': 'Cover',
    'slide.whatIsHologram': 'What is Hologram?',
    'slide.theProblem': 'The Problem',
    'slide.businessRisk': 'Business Risk',
    'slide.roi': 'Measurable ROI',
    'slide.platform': 'Hologram Platform',
    'slide.hyperSIMs': 'Hyper SIMs',
    'slide.outageProtection': 'Outage Protection',
    'slide.nativeProfiles': 'Native Profiles',
    'slide.softwareAPI': 'Software & API',
    'slide.support': 'Expert Support',
    'slide.security': 'Security',
    'slide.globalCoverage': 'Global Coverage',
    'slide.customers': 'Customers',
    'slide.verkada': 'Verkada',
    'slide.farmersFridge': "Farmer's Fridge",
    'slide.sundayPower': 'Sunday Power',
    'slide.capabilities1': 'Protect/Deploy/Manage',
    'slide.capabilities2': 'Optimize/Secure/Scale',
    'slide.supercharge': 'Supercharge IoT',
    'slide.demo': 'Product Demo',
    'slide.tailored': 'Tailored Plan',
    'slide.calculator': 'Pricing Calculator',
    'slide.contact': 'Stay Connected',

    // ─── Personalization modal ─────────────────────────────────────────────────
    'modal.title': 'Personalize this presentation',
    'modal.companyName': 'Company Name',
    'modal.companyPlaceholder': "Your prospect's company name",
    'modal.aeName': 'Your Name (AE)',
    'modal.aeNamePlaceholder': 'Account Executive name',
    'modal.aeEmail': 'Your Email',
    'modal.aeEmailPlaceholder': 'your.email@hologram.io',
    'modal.aePhone': 'Your Phone',
    'modal.aePhonePlaceholder': '+1 (555) 123-4567',

    // ─── Slide 1: Cover ────────────────────────────────────────────────────────
    'cover.outage': 'Outage',
    'cover.proof': 'Proof',
    'cover.line2': 'Cellular Connectivity',
    'cover.line3': 'That Just Works.',
    'cover.subtitle': 'The only IoT connectivity platform that stops outages before they happen',
    'cover.preparedFor': 'Prepared exclusively for',

    // ─── Slide 2: What is Hologram? ────────────────────────────────────────────
    'what.eyebrow': 'What is Hologram?',
    'what.headline': 'Outage-proof cellular connectivity',
    'what.headlineAccent': 'for IoT',
    'what.body': 'The only end-to-end IoT connectivity platform that stops outages before they start — so you can deploy, manage, and scale devices globally with reliability that protects your bottom line.',
    'what.pillar.hyperSIMs': 'Hyper SIMs',
    'what.pillar.hyperSIMs.detail': 'Multi-core eUICC SIMs with on-demand profile switching and built-in fallback technology.',
    'what.pillar.globalCoverage': 'Global Coverage',
    'what.pillar.globalCoverage.detail': 'Multi-carrier redundancy across 190+ countries, keeping devices connected everywhere.',
    'what.pillar.outageProtection': 'Outage Protection',
    'what.pillar.outageProtection.detail': 'Patented fallback technology with separate hardware cores that switch instantly on failure.',
    'what.pillar.dashboardAPI': 'Dashboard & API',
    'what.pillar.dashboardAPI.detail': 'Full fleet management with real-time monitoring, usage analytics, and a powerful REST API.',
    'what.stat.customers': 'Customers',
    'what.stat.countries': 'Countries',
    'what.stat.carriers': 'Carriers',
    'what.stat.uptime': 'Uptime',

    // ─── Slide 3: The Problem ──────────────────────────────────────────────────
    'problem1.eyebrow': 'The problem with most connectivity providers',
    'problem1.headline': 'Most connectivity providers are a liability, not an asset.',
    'problem1.card1.title': 'Unreliable connectivity',
    'problem1.card1.items': 'Frequent outages|Spotty coverage|Low throughput|High latency|Single-carrier dependency',
    'problem1.card2.title': 'Complicated workflows',
    'problem1.card2.items': 'Multiple carrier relationships|Slow manual processes|Troubleshooting across multiple platforms|Regional compliance requirements|Fractured reporting and billing',
    'problem1.card3.title': 'Frustrating software',
    'problem1.card3.items': 'No visibility on device health|Limited or non-existent APIs|No clear root cause analysis|Clunky confusing interfaces|Can\'t integrate with existing systems',

    // ─── Slide 4: Business Risk ────────────────────────────────────────────────
    'problem2.eyebrow': 'The problem with most connectivity providers',
    'problem2.headline': 'Is your provider protecting your revenue, or putting it at risk?',
    'problem2.risk1': 'Every minute of downtime means lost transactions, missed data, and unhappy customers.',
    'problem2.risk2': 'Slow time-to-market delays revenue as devices sit in warehouses instead of generating value.',
    'problem2.risk3': 'Inefficient operations drain resources that could be invested in growth.',
    'problem2.risk4': 'Customer churn increases when connectivity problems erode trust in your product.',

    // ─── Slide 5: ROI ──────────────────────────────────────────────────────────
    'roi.eyebrow': 'How is Hologram different?',
    'roi.headline': 'Anyone can sell you a SIM card. Hologram delivers measurable ROI.',
    'roi.body': 'From 50% reduction in connectivity costs to guaranteed uptime that protects revenue streams...',
    'roi.stat1.label': 'AVERAGE REDUCTION IN CONNECTIVITY COSTS',
    'roi.stat2.label': 'HISTORICAL UPTIME, 99.95% GUARANTEED BY SLA',
    'roi.stat3.label': 'OF DATA TRANSMITTED DAILY',
    'roi.stat4.label': 'BUSINESSES TRUST HOLOGRAM',
    'roi.quote1': 'The ROI with Hologram has been exceptional. We were able to cut our IoT bills in half.',
    'roi.quote2': 'The flexibility that Hologram provides helped us avoid downtime despite AT&T and Verizon outages.',

    // ─── Slide 6: Platform ─────────────────────────────────────────────────────
    'platform.eyebrow': 'Hologram Platform',
    'platform.headline': 'Deploy faster. Scale smarter. Connect everywhere.',
    'platform.subtitle': 'The only connectivity platform that stops outages before they happen, so you can focus on building and not troubleshooting.',
    'platform.feat1.title': 'Single SIM — 190+ countries, 550+ carriers',
    'platform.feat1.detail': 'One SIM that works everywhere. No more juggling multiple carrier relationships.',
    'platform.feat2.title': 'Outage Protection — 99.95% uptime guaranteed',
    'platform.feat2.detail': 'Multi-core SIMs with automatic fallback technology. Your devices stay online.',
    'platform.feat3.title': 'Developer API — REST API loved by devs',
    'platform.feat3.detail': 'Integrate seamlessly with your existing systems via our fully-documented REST API.',
    'platform.simLabel': 'Hyper SIM Card',
    'platform.simDetail': 'Multi-profile eUICC with intelligent orchestration',

    // ─── Slide 7: Hyper SIMs ───────────────────────────────────────────────────
    'hyper.eyebrow': 'Hologram features',
    'hyper.headline': 'Hyper SIMs',
    'hyper.subtitle': 'Multi-core eUICC connectivity, reimagined',
    'hyper.feat1.title': 'Global coverage',
    'hyper.feat1.detail': 'Access 550+ carriers in 190+ countries. Hyper SIMs automatically connect to the strongest signal.',
    'hyper.feat2.title': 'Customizable connectivity',
    'hyper.feat2.detail': 'Seamlessly switch profiles automatically or on demand to optimize for cost, performance, and coverage.',
    'hyper.feat3.title': 'Future ready',
    'hyper.feat3.detail': 'Push updates over-the-air during the whole device life cycle. No more swapping SIMs.',
    'hyper.feat4.title': 'Blazing performance',
    'hyper.feat4.detail': 'Latency as low as 50ms for near-instant data transfer and seamless operations.',

    // ─── Slide 8: Outage Protection ────────────────────────────────────────────
    'outage.eyebrow': 'Hologram features',
    'outage.headline': 'Outage Protection',
    'outage.subtitle': 'Keep mission-critical devices online',
    'outage.feat1.title': 'Multi-core SIMs with Fallback technology',
    'outage.feat1.detail': 'Hologram Hyper SIMs contain multiple cores — a primary core that connects to your preferred carrier network and a backup core that automatically activates if the primary experiences an outage. Fallback technology monitors signal health in real time and switches seamlessly, with no manual intervention required.',
    'outage.feat2.title': "The industry's only uptime guarantee",
    'outage.feat2.detail': '99.95% uptime, contractually guaranteed. Historical uptime is 99.99%. No other connectivity provider puts this in writing.',
    'outage.callout': '99.99% Historical Uptime',
    'outage.callout.sub': '99.95% Guaranteed by SLA',
    'outage.roaming': 'Roaming',
    'outage.roaming.detail': "Shares the same physical core. If the carrier fails, you're down.",
    'outage.fallback': 'Fallback',
    'outage.fallback.detail': 'Separate hardware cores. Primary outage triggers instant switch to backup.',
    'outage.step1': 'Primary network active',
    'outage.step1.status': 'MONITORING',
    'outage.step2': 'Fallback activated instantly',
    'outage.step2.status': 'SWITCHING',

    // ─── Slide 9: Native Profiles ──────────────────────────────────────────────
    'native.eyebrow': 'Hologram features',
    'native.headline': 'Native Carrier Profiles',
    'native.subtitle': 'Direct carrier access, not generic roaming',

    // ─── Slide 10: Software & API ──────────────────────────────────────────────
    'software.eyebrow': 'Hologram features',
    'software.headline': 'Powerful Software & API',
    'software.subtitle': 'Complete fleet visibility and control',
    'software.feat1.title': 'Actionable, real-time information',
    'software.feat1.detail': "Visualize every aspect of your fleet's connectivity. Comprehensive analytics help you pinpoint misbehaving devices.",
    'software.feat2.title': 'Easy device management',
    'software.feat2.detail': 'Track, troubleshoot, and take action on one or all of your devices. Pause data usage and set data limits.',
    'software.feat3.title': 'API loved by developers',
    'software.feat3.detail': 'Easily and securely plug your data into your existing applications via our REST API.',
    'software.feat4.title': 'Seamless activation',
    'software.feat4.detail': "Just a few clicks and your devices are live — whether it's one or one hundred thousand.",

    // ─── Slide 11: Support ─────────────────────────────────────────────────────
    'support.eyebrow': 'Hologram features',
    'support.headline': 'Support from actual experts',
    'support.subtitle': 'Hands-on support from engineers who solve connectivity problems, not people who forward tickets.',
    'support.feat1.title': 'Dedicated Solutions Engineers',
    'support.feat1.detail': 'Talk directly to engineers, not support reps reading from scripts.',
    'support.feat2.title': 'Rapid, reliable response',
    'support.feat2.detail': 'We offer 24/7 customer support coverage with guaranteed SLAs.',
    'support.feat3.title': 'Deep connectivity expertise',
    'support.feat3.detail': 'Our engineers have decades of combined experience across cellular networks, device hardware, firmware, and IoT protocols.',
    'support.review1': 'Switched to Hologram and never looked back – flawless performance + Spanish support',
    'support.review2': 'Remarkable collaboration with Hologram',
    'support.review3': 'Hologram support team is professional and knowledgeable',
    'support.review4': 'Very easy to work with and super reliable',
    'support.g2': 'G2 Review',
    'support.online': 'Online',

    // ─── Slide 12: Security ────────────────────────────────────────────────────
    'security.eyebrow': 'Hologram features',
    'security.headline': 'Enterprise-Grade Security',
    'security.subtitle': 'Protect your fleet and your data',

    // ─── Slide 13: Globe ───────────────────────────────────────────────────────
    'globe.eyebrow': 'Hologram network',
    'globe.headline': 'Global Coverage',
    'globe.headlineAccent': 'Map',

    // ─── Slide 14: Customers ───────────────────────────────────────────────────
    'customers.eyebrow': 'Trusted by industry leaders',
    'customers.headline': 'Powering connectivity for',
    'customers.headlineAccent': '6,000+ businesses',

    // ─── Slides 15–17: Case studies ────────────────────────────────────────────
    'case.eyebrow': 'Customer success',
    'case.challenge': 'Challenge',
    'case.solution': 'Solution',

    // ─── Slides 18–19: Capabilities ────────────────────────────────────────────
    'cap.eyebrow': 'How is Hologram different?',
    'cap.headline': 'Hologram is designed for the needs of',
    'cap.headlineAccent': 'modern IoT',
    'cap.headlineSuffix': 'devices and teams.',
    'cap.protect': 'Protect',
    'cap.deploy': 'Deploy',
    'cap.manage': 'Manage',
    'cap.optimize': 'Optimize',
    'cap.secure': 'Secure',
    'cap.scale': 'Scale',
    'cap.protect.desc': 'Prevent outages before they impact your bottom line with multi-core technology.',
    'cap.deploy.desc': 'Launch IoT devices anywhere with a single SIM solution that works across 190+ countries.',
    'cap.manage.desc': 'Control your operations through enterprise-grade software with real-time visibility.',
    'cap.optimize.desc': 'Maximize ROI and minimize costs with intelligent tools.',
    'cap.secure.desc': 'Protect your devices and data with enterprise-grade security features.',
    'cap.scale.desc': 'Grow your IoT deployment from pilot to production without changing infrastructure.',

    // ─── Slide 20: Supercharge ─────────────────────────────────────────────────
    'super.eyebrow': 'Connect with Hologram',
    'super.headline': 'Supercharge your',
    'super.headlineAccent': 'IoT operations',

    // ─── Slide 21: Demo ────────────────────────────────────────────────────────
    'demo.eyebrow': 'See it in action',
    'demo.headline': 'Experience Hologram',
    'demo.headlineAccent': 'firsthand',
    'demo.body': 'Explore the Hologram platform with our interactive demo. See how easy it is to manage global IoT deployments.',

    // ─── Slide 22: Tailored ────────────────────────────────────────────────────
    'tailored.eyebrow': 'Why Hologram',
    'tailored.headlinePersonalized': 'The right partner for',
    'tailored.headlineDefault': 'Everything you need.',
    'tailored.headlineDefaultAccent': "Nothing you don't.",
    'tailored.body': 'We build a connectivity plan optimized for your specific deployment — from coverage to cost to support.',
    'tailored.cta': "Let's build your plan →",

    // ─── Slide 23: Calculator ──────────────────────────────────────────────────
    'calc.eyebrow': 'Transparent pricing',
    'calc.headline': 'Pricing',
    'calc.headlineAccent': 'Calculator',

    // ─── Slide 24: Contact ─────────────────────────────────────────────────────
    'contact.eyebrow': 'Connect with Hologram',
    'contact.headline': 'Stay',
    'contact.headlineAccent': 'connected',
    'contact.cta': 'Get Started →',
}

const es: typeof en = {
    // ─── Nav / UI ───────────────────────────────────────────────────────────────
    'nav.edit': '+ EDITAR',
    'nav.toc': 'ÍNDICE',
    'nav.skip': 'Omitir',
    'nav.startPresentation': 'Iniciar presentación',

    // ─── Slide labels (TOC) ────────────────────────────────────────────────────
    'slide.cover': 'Portada',
    'slide.whatIsHologram': '¿Qué es Hologram?',
    'slide.theProblem': 'El Problema',
    'slide.businessRisk': 'Riesgo Empresarial',
    'slide.roi': 'ROI Medible',
    'slide.platform': 'Plataforma Hologram',
    'slide.hyperSIMs': 'Hyper SIMs',
    'slide.outageProtection': 'Protección contra Cortes',
    'slide.nativeProfiles': 'Perfiles Nativos',
    'slide.softwareAPI': 'Software y API',
    'slide.support': 'Soporte Experto',
    'slide.security': 'Seguridad',
    'slide.globalCoverage': 'Cobertura Global',
    'slide.customers': 'Clientes',
    'slide.verkada': 'Verkada',
    'slide.farmersFridge': "Farmer's Fridge",
    'slide.sundayPower': 'Sunday Power',
    'slide.capabilities1': 'Proteger/Desplegar/Gestionar',
    'slide.capabilities2': 'Optimizar/Asegurar/Escalar',
    'slide.supercharge': 'Potenciar IoT',
    'slide.demo': 'Demo del Producto',
    'slide.tailored': 'Plan Personalizado',
    'slide.calculator': 'Calculadora de Precios',
    'slide.contact': 'Mantente Conectado',

    // ─── Personalization modal ─────────────────────────────────────────────────
    'modal.title': 'Personaliza esta presentación',
    'modal.companyName': 'Nombre de la Empresa',
    'modal.companyPlaceholder': 'Nombre de la empresa del prospecto',
    'modal.aeName': 'Tu Nombre (AE)',
    'modal.aeNamePlaceholder': 'Nombre del ejecutivo de cuenta',
    'modal.aeEmail': 'Tu Correo',
    'modal.aeEmailPlaceholder': 'tu.correo@hologram.io',
    'modal.aePhone': 'Tu Teléfono',
    'modal.aePhonePlaceholder': '+1 (555) 123-4567',

    // ─── Slide 1: Cover ────────────────────────────────────────────────────────
    'cover.outage': 'A Prueba',
    'cover.proof': 'de Cortes',
    'cover.line2': 'Conectividad Celular',
    'cover.line3': 'Que Simplemente Funciona.',
    'cover.subtitle': 'La única plataforma de conectividad IoT que detiene los cortes antes de que sucedan',
    'cover.preparedFor': 'Preparado exclusivamente para',

    // ─── Slide 2: What is Hologram? ────────────────────────────────────────────
    'what.eyebrow': '¿Qué es Hologram?',
    'what.headline': 'Conectividad celular a prueba de cortes',
    'what.headlineAccent': 'para IoT',
    'what.body': 'La única plataforma integral de conectividad IoT que detiene los cortes antes de que comiencen — para que puedas desplegar, gestionar y escalar dispositivos globalmente con una fiabilidad que protege tu resultado final.',
    'what.pillar.hyperSIMs': 'Hyper SIMs',
    'what.pillar.hyperSIMs.detail': 'SIMs eUICC multi-núcleo con cambio de perfil bajo demanda y tecnología de respaldo integrada.',
    'what.pillar.globalCoverage': 'Cobertura Global',
    'what.pillar.globalCoverage.detail': 'Redundancia multi-operador en más de 190 países, manteniendo los dispositivos conectados en todas partes.',
    'what.pillar.outageProtection': 'Protección contra Cortes',
    'what.pillar.outageProtection.detail': 'Tecnología de respaldo patentada con núcleos de hardware separados que cambian instantáneamente ante fallas.',
    'what.pillar.dashboardAPI': 'Panel y API',
    'what.pillar.dashboardAPI.detail': 'Gestión completa de flota con monitoreo en tiempo real, análisis de uso y una potente API REST.',
    'what.stat.customers': 'Clientes',
    'what.stat.countries': 'Países',
    'what.stat.carriers': 'Operadores',
    'what.stat.uptime': 'Disponibilidad',

    // ─── Slide 3: The Problem ──────────────────────────────────────────────────
    'problem1.eyebrow': 'El problema con la mayoría de los proveedores de conectividad',
    'problem1.headline': 'La mayoría de los proveedores de conectividad son un riesgo, no un activo.',
    'problem1.card1.title': 'Conectividad poco fiable',
    'problem1.card1.items': 'Cortes frecuentes|Cobertura irregular|Bajo rendimiento|Alta latencia|Dependencia de un solo operador',
    'problem1.card2.title': 'Flujos de trabajo complicados',
    'problem1.card2.items': 'Múltiples relaciones con operadores|Procesos manuales lentos|Resolución de problemas en múltiples plataformas|Requisitos de cumplimiento regional|Informes y facturación fragmentados',
    'problem1.card3.title': 'Software frustrante',
    'problem1.card3.items': 'Sin visibilidad en la salud del dispositivo|APIs limitadas o inexistentes|Sin análisis claro de causa raíz|Interfaces confusas y torpes|No se puede integrar con sistemas existentes',

    // ─── Slide 4: Business Risk ────────────────────────────────────────────────
    'problem2.eyebrow': 'El problema con la mayoría de los proveedores de conectividad',
    'problem2.headline': '¿Tu proveedor protege tus ingresos o los pone en riesgo?',
    'problem2.risk1': 'Cada minuto de inactividad significa transacciones perdidas, datos faltantes y clientes insatisfechos.',
    'problem2.risk2': 'Un tiempo de comercialización lento retrasa los ingresos mientras los dispositivos están en almacenes en lugar de generar valor.',
    'problem2.risk3': 'Las operaciones ineficientes agotan recursos que podrían invertirse en crecimiento.',
    'problem2.risk4': 'La rotación de clientes aumenta cuando los problemas de conectividad erosionan la confianza en tu producto.',

    // ─── Slide 5: ROI ──────────────────────────────────────────────────────────
    'roi.eyebrow': '¿Cómo es Hologram diferente?',
    'roi.headline': 'Cualquiera puede venderte una tarjeta SIM. Hologram ofrece ROI medible.',
    'roi.body': 'Desde una reducción del 50% en costos de conectividad hasta un tiempo de actividad garantizado que protege los flujos de ingresos...',
    'roi.stat1.label': 'REDUCCIÓN PROMEDIO EN COSTOS DE CONECTIVIDAD',
    'roi.stat2.label': 'DISPONIBILIDAD HISTÓRICA, 99.95% GARANTIZADA POR SLA',
    'roi.stat3.label': 'DE DATOS TRANSMITIDOS DIARIAMENTE',
    'roi.stat4.label': 'EMPRESAS CONFÍAN EN HOLOGRAM',
    'roi.quote1': 'El ROI con Hologram ha sido excepcional. Pudimos reducir nuestras facturas de IoT a la mitad.',
    'roi.quote2': 'La flexibilidad que ofrece Hologram nos ayudó a evitar tiempo de inactividad a pesar de los cortes de AT&T y Verizon.',

    // ─── Slide 6: Platform ─────────────────────────────────────────────────────
    'platform.eyebrow': 'Plataforma Hologram',
    'platform.headline': 'Despliega más rápido. Escala con inteligencia. Conéctate en todas partes.',
    'platform.subtitle': 'La única plataforma de conectividad que detiene los cortes antes de que ocurran, para que puedas concentrarte en construir y no en solucionar problemas.',
    'platform.feat1.title': 'Una sola SIM — 190+ países, 550+ operadores',
    'platform.feat1.detail': 'Una SIM que funciona en todas partes. Sin necesidad de gestionar múltiples relaciones con operadores.',
    'platform.feat2.title': 'Protección contra cortes — 99.95% de disponibilidad garantizada',
    'platform.feat2.detail': 'SIMs multi-núcleo con tecnología de respaldo automático. Tus dispositivos permanecen en línea.',
    'platform.feat3.title': 'API para desarrolladores — API REST amada por devs',
    'platform.feat3.detail': 'Intégrate sin problemas con tus sistemas existentes mediante nuestra API REST completamente documentada.',
    'platform.simLabel': 'Tarjeta Hyper SIM',
    'platform.simDetail': 'eUICC multi-perfil con orquestación inteligente',

    // ─── Slide 7: Hyper SIMs ───────────────────────────────────────────────────
    'hyper.eyebrow': 'Características de Hologram',
    'hyper.headline': 'Hyper SIMs',
    'hyper.subtitle': 'Conectividad eUICC multi-núcleo, reinventada',
    'hyper.feat1.title': 'Cobertura global',
    'hyper.feat1.detail': 'Accede a más de 550 operadores en más de 190 países. Las Hyper SIMs se conectan automáticamente a la señal más fuerte.',
    'hyper.feat2.title': 'Conectividad personalizable',
    'hyper.feat2.detail': 'Cambia de perfil automática o manualmente para optimizar costo, rendimiento y cobertura.',
    'hyper.feat3.title': 'Preparado para el futuro',
    'hyper.feat3.detail': 'Envía actualizaciones por aire durante todo el ciclo de vida del dispositivo. Sin más cambios de SIM.',
    'hyper.feat4.title': 'Rendimiento ultrarrápido',
    'hyper.feat4.detail': 'Latencia tan baja como 50ms para transferencia de datos casi instantánea y operaciones sin interrupciones.',

    // ─── Slide 8: Outage Protection ────────────────────────────────────────────
    'outage.eyebrow': 'Características de Hologram',
    'outage.headline': 'Protección contra Cortes',
    'outage.subtitle': 'Mantén los dispositivos críticos en línea',
    'outage.feat1.title': 'SIMs multi-núcleo con tecnología de Respaldo',
    'outage.feat1.detail': 'Las Hyper SIMs de Hologram contienen múltiples núcleos — un núcleo primario que se conecta a tu red de operador preferida y un núcleo de respaldo que se activa automáticamente si el primario experimenta un corte. La tecnología de respaldo monitorea la salud de la señal en tiempo real y cambia de manera transparente, sin intervención manual.',
    'outage.feat2.title': 'La única garantía de disponibilidad de la industria',
    'outage.feat2.detail': '99.95% de disponibilidad, garantizado contractualmente. La disponibilidad histórica es del 99.99%. Ningún otro proveedor de conectividad lo pone por escrito.',
    'outage.callout': '99.99% Disponibilidad Histórica',
    'outage.callout.sub': '99.95% Garantizada por SLA',
    'outage.roaming': 'Roaming',
    'outage.roaming.detail': 'Comparte el mismo núcleo físico. Si el operador falla, te quedas sin conexión.',
    'outage.fallback': 'Respaldo',
    'outage.fallback.detail': 'Núcleos de hardware separados. Un corte primario activa el cambio instantáneo al respaldo.',
    'outage.step1': 'Red primaria activa',
    'outage.step1.status': 'MONITOREANDO',
    'outage.step2': 'Respaldo activado instantáneamente',
    'outage.step2.status': 'CAMBIANDO',

    // ─── Slide 9: Native Profiles ──────────────────────────────────────────────
    'native.eyebrow': 'Características de Hologram',
    'native.headline': 'Perfiles de Operador Nativos',
    'native.subtitle': 'Acceso directo al operador, no roaming genérico',

    // ─── Slide 10: Software & API ──────────────────────────────────────────────
    'software.eyebrow': 'Características de Hologram',
    'software.headline': 'Software y API Potentes',
    'software.subtitle': 'Visibilidad y control completo de la flota',
    'software.feat1.title': 'Información accionable en tiempo real',
    'software.feat1.detail': 'Visualiza cada aspecto de la conectividad de tu flota. Los análisis integrales te ayudan a identificar dispositivos con problemas.',
    'software.feat2.title': 'Gestión fácil de dispositivos',
    'software.feat2.detail': 'Rastrea, soluciona problemas y toma acción en uno o todos tus dispositivos. Pausa el uso de datos y establece límites.',
    'software.feat3.title': 'API amada por desarrolladores',
    'software.feat3.detail': 'Conecta tus datos de forma fácil y segura a tus aplicaciones existentes mediante nuestra API REST.',
    'software.feat4.title': 'Activación sin complicaciones',
    'software.feat4.detail': 'Con solo unos clics tus dispositivos están activos — ya sea uno o cien mil.',

    // ─── Slide 11: Support ─────────────────────────────────────────────────────
    'support.eyebrow': 'Características de Hologram',
    'support.headline': 'Soporte de verdaderos expertos',
    'support.subtitle': 'Soporte práctico de ingenieros que resuelven problemas de conectividad, no personas que reenvían tickets.',
    'support.feat1.title': 'Ingenieros de Soluciones Dedicados',
    'support.feat1.detail': 'Habla directamente con ingenieros, no con representantes de soporte leyendo de guiones.',
    'support.feat2.title': 'Respuesta rápida y confiable',
    'support.feat2.detail': 'Ofrecemos cobertura de soporte al cliente 24/7 con SLAs garantizados.',
    'support.feat3.title': 'Profunda experiencia en conectividad',
    'support.feat3.detail': 'Nuestros ingenieros tienen décadas de experiencia combinada en redes celulares, hardware de dispositivos, firmware y protocolos IoT.',
    'support.review1': 'Cambiamos a Hologram y nunca miramos atrás – rendimiento impecable + soporte en español',
    'support.review2': 'Colaboración extraordinaria con Hologram',
    'support.review3': 'El equipo de soporte de Hologram es profesional y conocedor',
    'support.review4': 'Muy fácil de trabajar y súper confiable',
    'support.g2': 'Reseña G2',
    'support.online': 'En línea',

    // ─── Slide 12: Security ────────────────────────────────────────────────────
    'security.eyebrow': 'Características de Hologram',
    'security.headline': 'Seguridad de Nivel Empresarial',
    'security.subtitle': 'Protege tu flota y tus datos',

    // ─── Slide 13: Globe ───────────────────────────────────────────────────────
    'globe.eyebrow': 'Red de Hologram',
    'globe.headline': 'Mapa de Cobertura',
    'globe.headlineAccent': 'Global',

    // ─── Slide 14: Customers ───────────────────────────────────────────────────
    'customers.eyebrow': 'Con la confianza de líderes de la industria',
    'customers.headline': 'Potenciando la conectividad para',
    'customers.headlineAccent': 'más de 6,000 empresas',

    // ─── Slides 15–17: Case studies ────────────────────────────────────────────
    'case.eyebrow': 'Éxito de clientes',
    'case.challenge': 'Desafío',
    'case.solution': 'Solución',

    // ─── Slides 18–19: Capabilities ────────────────────────────────────────────
    'cap.eyebrow': '¿Cómo es Hologram diferente?',
    'cap.headline': 'Hologram está diseñado para las necesidades del',
    'cap.headlineAccent': 'IoT moderno',
    'cap.headlineSuffix': 'dispositivos y equipos.',
    'cap.protect': 'Proteger',
    'cap.deploy': 'Desplegar',
    'cap.manage': 'Gestionar',
    'cap.optimize': 'Optimizar',
    'cap.secure': 'Asegurar',
    'cap.scale': 'Escalar',
    'cap.protect.desc': 'Previene cortes antes de que impacten tu resultado final con tecnología multi-núcleo.',
    'cap.deploy.desc': 'Lanza dispositivos IoT en cualquier lugar con una solución de SIM única que funciona en más de 190 países.',
    'cap.manage.desc': 'Controla tus operaciones a través de software de nivel empresarial con visibilidad en tiempo real.',
    'cap.optimize.desc': 'Maximiza el ROI y minimiza costos con herramientas inteligentes.',
    'cap.secure.desc': 'Protege tus dispositivos y datos con características de seguridad de nivel empresarial.',
    'cap.scale.desc': 'Haz crecer tu despliegue IoT de piloto a producción sin cambiar infraestructura.',

    // ─── Slide 20: Supercharge ─────────────────────────────────────────────────
    'super.eyebrow': 'Conéctate con Hologram',
    'super.headline': 'Potencia tus',
    'super.headlineAccent': 'operaciones IoT',

    // ─── Slide 21: Demo ────────────────────────────────────────────────────────
    'demo.eyebrow': 'Véalo en acción',
    'demo.headline': 'Experimenta Hologram',
    'demo.headlineAccent': 'de primera mano',
    'demo.body': 'Explora la plataforma Hologram con nuestra demo interactiva. Descubre lo fácil que es gestionar despliegues IoT globales.',

    // ─── Slide 22: Tailored ────────────────────────────────────────────────────
    'tailored.eyebrow': 'Por qué Hologram',
    'tailored.headlinePersonalized': 'El socio ideal para',
    'tailored.headlineDefault': 'Todo lo que necesitas.',
    'tailored.headlineDefaultAccent': 'Nada que no.',
    'tailored.body': 'Construimos un plan de conectividad optimizado para tu despliegue específico — desde cobertura hasta costos y soporte.',
    'tailored.cta': 'Construyamos tu plan →',

    // ─── Slide 23: Calculator ──────────────────────────────────────────────────
    'calc.eyebrow': 'Precios transparentes',
    'calc.headline': 'Calculadora de',
    'calc.headlineAccent': 'Precios',

    // ─── Slide 24: Contact ─────────────────────────────────────────────────────
    'contact.eyebrow': 'Conéctate con Hologram',
    'contact.headline': 'Mantente',
    'contact.headlineAccent': 'conectado',
    'contact.cta': 'Comenzar →',
}

const it: typeof en = {
    // ─── Nav / UI ───────────────────────────────────────────────────────────────
    'nav.edit': '+ MODIFICA',
    'nav.toc': 'INDICE',
    'nav.skip': 'Salta',
    'nav.startPresentation': 'Avvia presentazione',

    // ─── Slide labels (TOC) ────────────────────────────────────────────────────
    'slide.cover': 'Copertina',
    'slide.whatIsHologram': "Cos'è Hologram?",
    'slide.theProblem': 'Il Problema',
    'slide.businessRisk': 'Rischio Aziendale',
    'slide.roi': 'ROI Misurabile',
    'slide.platform': 'Piattaforma Hologram',
    'slide.hyperSIMs': 'Hyper SIMs',
    'slide.outageProtection': 'Protezione Interruzioni',
    'slide.nativeProfiles': 'Profili Nativi',
    'slide.softwareAPI': 'Software e API',
    'slide.support': 'Supporto Esperto',
    'slide.security': 'Sicurezza',
    'slide.globalCoverage': 'Copertura Globale',
    'slide.customers': 'Clienti',
    'slide.verkada': 'Verkada',
    'slide.farmersFridge': "Farmer's Fridge",
    'slide.sundayPower': 'Sunday Power',
    'slide.capabilities1': 'Proteggi/Distribuisci/Gestisci',
    'slide.capabilities2': 'Ottimizza/Proteggi/Scala',
    'slide.supercharge': 'Potenzia IoT',
    'slide.demo': 'Demo del Prodotto',
    'slide.tailored': 'Piano Personalizzato',
    'slide.calculator': 'Calcolatore Prezzi',
    'slide.contact': 'Rimani Connesso',

    // ─── Personalization modal ─────────────────────────────────────────────────
    'modal.title': 'Personalizza questa presentazione',
    'modal.companyName': 'Nome Azienda',
    'modal.companyPlaceholder': "Nome dell'azienda del cliente",
    'modal.aeName': 'Il Tuo Nome (AE)',
    'modal.aeNamePlaceholder': 'Nome Account Executive',
    'modal.aeEmail': 'La Tua Email',
    'modal.aeEmailPlaceholder': 'tua.email@hologram.io',
    'modal.aePhone': 'Il Tuo Telefono',
    'modal.aePhonePlaceholder': '+1 (555) 123-4567',

    // ─── Slide 1: Cover ────────────────────────────────────────────────────────
    'cover.outage': 'A Prova',
    'cover.proof': 'di Guasti',
    'cover.line2': 'Connettività Cellulare',
    'cover.line3': 'Che Funziona Sempre.',
    'cover.subtitle': "L'unica piattaforma di connettività IoT che blocca le interruzioni prima che accadano",
    'cover.preparedFor': 'Preparato esclusivamente per',

    // ─── Slide 2: What is Hologram? ────────────────────────────────────────────
    'what.eyebrow': "Cos'è Hologram?",
    'what.headline': 'Connettività cellulare a prova di guasto',
    'what.headlineAccent': 'per IoT',
    'what.body': "L'unica piattaforma completa di connettività IoT che blocca le interruzioni prima che inizino — così puoi distribuire, gestire e scalare dispositivi globalmente con un'affidabilità che protegge il tuo bilancio.",
    'what.pillar.hyperSIMs': 'Hyper SIMs',
    'what.pillar.hyperSIMs.detail': 'SIM eUICC multi-core con cambio profilo su richiesta e tecnologia di backup integrata.',
    'what.pillar.globalCoverage': 'Copertura Globale',
    'what.pillar.globalCoverage.detail': 'Ridondanza multi-operatore in 190+ paesi, mantenendo i dispositivi connessi ovunque.',
    'what.pillar.outageProtection': 'Protezione Interruzioni',
    'what.pillar.outageProtection.detail': 'Tecnologia di backup brevettata con core hardware separati che commutano istantaneamente in caso di guasto.',
    'what.pillar.dashboardAPI': 'Dashboard e API',
    'what.pillar.dashboardAPI.detail': "Gestione completa della flotta con monitoraggio in tempo reale, analisi dell'utilizzo e una potente API REST.",
    'what.stat.customers': 'Clienti',
    'what.stat.countries': 'Paesi',
    'what.stat.carriers': 'Operatori',
    'what.stat.uptime': 'Uptime',

    // ─── Slide 3: The Problem ──────────────────────────────────────────────────
    'problem1.eyebrow': 'Il problema con la maggior parte dei provider di connettività',
    'problem1.headline': 'La maggior parte dei provider di connettività è una responsabilità, non una risorsa.',
    'problem1.card1.title': 'Connettività inaffidabile',
    'problem1.card1.items': 'Interruzioni frequenti|Copertura discontinua|Bassa velocità|Alta latenza|Dipendenza da un unico operatore',
    'problem1.card2.title': 'Flussi di lavoro complicati',
    'problem1.card2.items': 'Relazioni con più operatori|Processi manuali lenti|Risoluzione problemi su piattaforme multiple|Requisiti di conformità regionali|Report e fatturazione frammentati',
    'problem1.card3.title': 'Software frustrante',
    'problem1.card3.items': "Nessuna visibilità sullo stato del dispositivo|API limitate o inesistenti|Nessuna analisi della causa principale|Interfacce confuse|Non integrabile con sistemi esistenti",

    // ─── Slide 4: Business Risk ────────────────────────────────────────────────
    'problem2.eyebrow': 'Il problema con la maggior parte dei provider di connettività',
    'problem2.headline': 'Il tuo provider protegge i tuoi ricavi o li mette a rischio?',
    'problem2.risk1': 'Ogni minuto di downtime significa transazioni perse, dati mancanti e clienti insoddisfatti.',
    'problem2.risk2': 'Un time-to-market lento ritarda i ricavi mentre i dispositivi restano in magazzino anziché generare valore.',
    'problem2.risk3': 'Le operazioni inefficienti drenano risorse che potrebbero essere investite nella crescita.',
    'problem2.risk4': 'Il churn dei clienti aumenta quando i problemi di connettività erodono la fiducia nel tuo prodotto.',

    // ─── Slide 5: ROI ──────────────────────────────────────────────────────────
    'roi.eyebrow': 'Come si distingue Hologram?',
    'roi.headline': 'Chiunque può venderti una SIM. Hologram offre ROI misurabile.',
    'roi.body': 'Da una riduzione del 50% dei costi di connettività a un uptime garantito che protegge i flussi di ricavi...',
    'roi.stat1.label': 'RIDUZIONE MEDIA DEI COSTI DI CONNETTIVITÀ',
    'roi.stat2.label': 'UPTIME STORICO, 99.95% GARANTITO DA SLA',
    'roi.stat3.label': 'DI DATI TRASMESSI GIORNALMENTE',
    'roi.stat4.label': 'AZIENDE SI AFFIDANO A HOLOGRAM',
    'roi.quote1': 'Il ROI con Hologram è stato eccezionale. Siamo riusciti a dimezzare le nostre bollette IoT.',
    'roi.quote2': 'La flessibilità di Hologram ci ha aiutato a evitare downtime nonostante le interruzioni di AT&T e Verizon.',

    // ─── Slide 6: Platform ─────────────────────────────────────────────────────
    'platform.eyebrow': 'Piattaforma Hologram',
    'platform.headline': 'Distribuisci più veloce. Scala in modo intelligente. Connettiti ovunque.',
    'platform.subtitle': "L'unica piattaforma di connettività che blocca le interruzioni prima che accadano, così puoi concentrarti sullo sviluppo anziché sulla risoluzione dei problemi.",
    'platform.feat1.title': 'Una sola SIM — 190+ paesi, 550+ operatori',
    'platform.feat1.detail': 'Una SIM che funziona ovunque. Nessuna necessità di gestire più relazioni con gli operatori.',
    'platform.feat2.title': 'Protezione interruzioni — 99.95% uptime garantito',
    'platform.feat2.detail': 'SIM multi-core con tecnologia di failover automatico. I tuoi dispositivi rimangono online.',
    'platform.feat3.title': 'API per sviluppatori — API REST amata dai dev',
    'platform.feat3.detail': 'Integra perfettamente con i tuoi sistemi esistenti tramite la nostra API REST completamente documentata.',
    'platform.simLabel': 'Scheda Hyper SIM',
    'platform.simDetail': 'eUICC multi-profilo con orchestrazione intelligente',

    // ─── Slide 7: Hyper SIMs ───────────────────────────────────────────────────
    'hyper.eyebrow': 'Caratteristiche Hologram',
    'hyper.headline': 'Hyper SIMs',
    'hyper.subtitle': 'Connettività eUICC multi-core, reinventata',
    'hyper.feat1.title': 'Copertura globale',
    'hyper.feat1.detail': 'Accedi a 550+ operatori in 190+ paesi. Le Hyper SIM si collegano automaticamente al segnale più forte.',
    'hyper.feat2.title': 'Connettività personalizzabile',
    'hyper.feat2.detail': 'Cambia profilo automaticamente o su richiesta per ottimizzare costo, prestazioni e copertura.',
    'hyper.feat3.title': 'Pronto per il futuro',
    'hyper.feat3.detail': 'Invia aggiornamenti OTA durante tutto il ciclo di vita del dispositivo. Niente più sostituzioni di SIM.',
    'hyper.feat4.title': 'Prestazioni fulminee',
    'hyper.feat4.detail': 'Latenza fino a 50ms per trasferimento dati quasi istantaneo e operazioni senza interruzioni.',

    // ─── Slide 8: Outage Protection ────────────────────────────────────────────
    'outage.eyebrow': 'Caratteristiche Hologram',
    'outage.headline': 'Protezione Interruzioni',
    'outage.subtitle': 'Mantieni online i dispositivi mission-critical',
    'outage.feat1.title': 'SIM multi-core con tecnologia Fallback',
    'outage.feat1.detail': "Le Hyper SIM di Hologram contengono più core — un core primario che si connette alla rete del tuo operatore preferito e un core di backup che si attiva automaticamente se il primario subisce un'interruzione. La tecnologia Fallback monitora la qualità del segnale in tempo reale e commuta in modo trasparente, senza intervento manuale.",
    'outage.feat2.title': 'La sola garanzia di uptime del settore',
    'outage.feat2.detail': "99.95% di uptime, garantito contrattualmente. L'uptime storico è del 99.99%. Nessun altro provider di connettività lo mette per iscritto.",
    'outage.callout': '99.99% Uptime Storico',
    'outage.callout.sub': '99.95% Garantito da SLA',
    'outage.roaming': 'Roaming',
    'outage.roaming.detail': "Condivide lo stesso core fisico. Se l'operatore cede, resti senza connessione.",
    'outage.fallback': 'Fallback',
    'outage.fallback.detail': "Un'interruzione primaria attiva la commutazione istantanea al backup. Core hardware separati.",
    'outage.step1': 'Rete primaria attiva',
    'outage.step1.status': 'MONITORAGGIO',
    'outage.step2': 'Fallback attivato istantaneamente',
    'outage.step2.status': 'COMMUTAZIONE',

    // ─── Slide 9: Native Profiles ──────────────────────────────────────────────
    'native.eyebrow': 'Caratteristiche Hologram',
    'native.headline': 'Profili Operatore Nativi',
    'native.subtitle': "Accesso diretto all'operatore, non roaming generico",

    // ─── Slide 10: Software & API ──────────────────────────────────────────────
    'software.eyebrow': 'Caratteristiche Hologram',
    'software.headline': 'Software e API Potenti',
    'software.subtitle': 'Visibilità e controllo completi della flotta',
    'software.feat1.title': 'Informazioni actionable in tempo reale',
    'software.feat1.detail': "Visualizza ogni aspetto della connettività della tua flotta. Analytics completi ti aiutano a individuare i dispositivi problematici.",
    'software.feat2.title': 'Gestione dispositivi semplice',
    'software.feat2.detail': "Monitora, risolvi e agisci su uno o tutti i tuoi dispositivi. Sospendi l'utilizzo dei dati e imposta limiti.",
    'software.feat3.title': 'API amata dagli sviluppatori',
    'software.feat3.detail': 'Collega facilmente e in sicurezza i tuoi dati alle applicazioni esistenti tramite la nostra API REST.',
    'software.feat4.title': 'Attivazione senza sforzo',
    'software.feat4.detail': 'Pochi clic e i tuoi dispositivi sono operativi — che siano uno o centomila.',

    // ─── Slide 11: Support ─────────────────────────────────────────────────────
    'support.eyebrow': 'Caratteristiche Hologram',
    'support.headline': 'Supporto da veri esperti',
    'support.subtitle': 'Supporto pratico da ingegneri che risolvono i problemi di connettività, non persone che inoltrano ticket.',
    'support.feat1.title': 'Solution Engineer Dedicati',
    'support.feat1.detail': 'Parla direttamente con ingegneri, non con rappresentanti che leggono da copioni.',
    'support.feat2.title': 'Risposta rapida e affidabile',
    'support.feat2.detail': 'Offriamo copertura di supporto clienti 24/7 con SLA garantiti.',
    'support.feat3.title': 'Profonda competenza in connettività',
    'support.feat3.detail': 'I nostri ingegneri hanno decenni di esperienza combinata in reti cellulari, hardware, firmware e protocolli IoT.',
    'support.review1': 'Passati a Hologram e non ci siamo mai voltati indietro – prestazioni eccellenti',
    'support.review2': 'Collaborazione straordinaria con Hologram',
    'support.review3': 'Il team di supporto Hologram è professionale e competente',
    'support.review4': 'Molto facile da collaborare e super affidabile',
    'support.g2': 'Recensione G2',
    'support.online': 'Online',

    // ─── Slide 12: Security ────────────────────────────────────────────────────
    'security.eyebrow': 'Caratteristiche Hologram',
    'security.headline': 'Sicurezza di Livello Enterprise',
    'security.subtitle': 'Proteggi la tua flotta e i tuoi dati',

    // ─── Slide 13: Globe ───────────────────────────────────────────────────────
    'globe.eyebrow': 'Rete Hologram',
    'globe.headline': 'Copertura Globale',
    'globe.headlineAccent': 'Mappa',

    // ─── Slide 14: Customers ───────────────────────────────────────────────────
    'customers.eyebrow': 'Scelto dai leader del settore',
    'customers.headline': 'Connettività per',
    'customers.headlineAccent': '6.000+ aziende',

    // ─── Slides 15–17: Case studies ────────────────────────────────────────────
    'case.eyebrow': 'Successi dei clienti',
    'case.challenge': 'Sfida',
    'case.solution': 'Soluzione',

    // ─── Slides 18–19: Capabilities ────────────────────────────────────────────
    'cap.eyebrow': 'Come si distingue Hologram?',
    'cap.headline': 'Hologram è progettato per le esigenze del',
    'cap.headlineAccent': 'IoT moderno',
    'cap.headlineSuffix': 'dispositivi e team.',
    'cap.protect': 'Proteggere',
    'cap.deploy': 'Distribuire',
    'cap.manage': 'Gestire',
    'cap.optimize': 'Ottimizzare',
    'cap.secure': 'Mettere in Sicurezza',
    'cap.scale': 'Scalare',
    'cap.protect.desc': 'Prevenire le interruzioni prima che impattino i tuoi profitti con la tecnologia multi-core.',
    'cap.deploy.desc': 'Lancia dispositivi IoT ovunque con una soluzione SIM unica che funziona in 190+ paesi.',
    'cap.manage.desc': 'Controlla le tue operazioni tramite software enterprise con visibilità in tempo reale.',
    'cap.optimize.desc': 'Massimizza il ROI e minimizza i costi con strumenti intelligenti.',
    'cap.secure.desc': 'Proteggi dispositivi e dati con funzionalità di sicurezza di livello enterprise.',
    'cap.scale.desc': "Fai crescere il tuo deployment IoT dal pilota alla produzione senza cambiare infrastruttura.",

    // ─── Slide 20: Supercharge ─────────────────────────────────────────────────
    'super.eyebrow': 'Connettiti con Hologram',
    'super.headline': 'Potenzia le tue',
    'super.headlineAccent': 'operazioni IoT',

    // ─── Slide 21: Demo ────────────────────────────────────────────────────────
    'demo.eyebrow': 'Scoprilo in azione',
    'demo.headline': 'Vivi Hologram',
    'demo.headlineAccent': 'di persona',
    'demo.body': 'Esplora la piattaforma Hologram con la nostra demo interattiva. Scopri quanto è facile gestire deployment IoT globali.',

    // ─── Slide 22: Tailored ────────────────────────────────────────────────────
    'tailored.eyebrow': 'Perché Hologram',
    'tailored.headlinePersonalized': 'Il partner giusto per',
    'tailored.headlineDefault': 'Tutto ciò di cui hai bisogno.',
    'tailored.headlineDefaultAccent': 'Niente di superfluo.',
    'tailored.body': 'Costruiamo un piano di connettività ottimizzato per il tuo deployment specifico — dalla copertura ai costi al supporto.',
    'tailored.cta': 'Costruiamo il tuo piano →',

    // ─── Slide 23: Calculator ──────────────────────────────────────────────────
    'calc.eyebrow': 'Prezzi trasparenti',
    'calc.headline': 'Calcolatore',
    'calc.headlineAccent': 'Prezzi',

    // ─── Slide 24: Contact ─────────────────────────────────────────────────────
    'contact.eyebrow': 'Connettiti con Hologram',
    'contact.headline': 'Rimani',
    'contact.headlineAccent': 'connesso',
    'contact.cta': 'Inizia Ora →',
}

const sv: typeof en = {
    // ─── Nav / UI ───────────────────────────────────────────────────────────────
    'nav.edit': '+ REDIGERA',
    'nav.toc': 'INNEHÅLL',
    'nav.skip': 'Hoppa över',
    'nav.startPresentation': 'Starta presentation',

    // ─── Slide labels (TOC) ────────────────────────────────────────────────────
    'slide.cover': 'Omslag',
    'slide.whatIsHologram': 'Vad är Hologram?',
    'slide.theProblem': 'Problemet',
    'slide.businessRisk': 'Affärsrisk',
    'slide.roi': 'Mätbart ROI',
    'slide.platform': 'Hologram-plattform',
    'slide.hyperSIMs': 'Hyper SIMs',
    'slide.outageProtection': 'Avbrottsskydd',
    'slide.nativeProfiles': 'Inbyggda profiler',
    'slide.softwareAPI': 'Mjukvara & API',
    'slide.support': 'Expertsupport',
    'slide.security': 'Säkerhet',
    'slide.globalCoverage': 'Global täckning',
    'slide.customers': 'Kunder',
    'slide.verkada': 'Verkada',
    'slide.farmersFridge': "Farmer's Fridge",
    'slide.sundayPower': 'Sunday Power',
    'slide.capabilities1': 'Skydda/Driftsätt/Hantera',
    'slide.capabilities2': 'Optimera/Säkra/Skala',
    'slide.supercharge': 'Superladda IoT',
    'slide.demo': 'Produktdemo',
    'slide.tailored': 'Skräddarsydd plan',
    'slide.calculator': 'Priskalkylator',
    'slide.contact': 'Håll kontakten',

    // ─── Personalization modal ─────────────────────────────────────────────────
    'modal.title': 'Personalisera denna presentation',
    'modal.companyName': 'Företagsnamn',
    'modal.companyPlaceholder': 'Prospektets företagsnamn',
    'modal.aeName': 'Ditt namn (AE)',
    'modal.aeNamePlaceholder': 'Account Executive-namn',
    'modal.aeEmail': 'Din e-post',
    'modal.aeEmailPlaceholder': 'din.epost@hologram.io',
    'modal.aePhone': 'Din telefon',
    'modal.aePhonePlaceholder': '+1 (555) 123-4567',

    // ─── Slide 1: Cover ────────────────────────────────────────────────────────
    'cover.outage': 'Avbrotts',
    'cover.proof': 'Säker',
    'cover.line2': 'Mobil Anslutning',
    'cover.line3': 'Som Bara Fungerar.',
    'cover.subtitle': 'Den enda IoT-anslutningsplattformen som stoppar avbrott innan de inträffar',
    'cover.preparedFor': 'Förberett exklusivt för',

    // ─── Slide 2: What is Hologram? ────────────────────────────────────────────
    'what.eyebrow': 'Vad är Hologram?',
    'what.headline': 'Avbrottssäker mobil anslutning',
    'what.headlineAccent': 'för IoT',
    'what.body': 'Den enda heltäckande IoT-anslutningsplattformen som stoppar avbrott innan de börjar — så att du kan driftsätta, hantera och skala enheter globalt med pålitlighet som skyddar din verksamhet.',
    'what.pillar.hyperSIMs': 'Hyper SIMs',
    'what.pillar.hyperSIMs.detail': 'Multi-core eUICC SIM-kort med profilbyte på begäran och inbyggd reservteknik.',
    'what.pillar.globalCoverage': 'Global täckning',
    'what.pillar.globalCoverage.detail': 'Multi-operatör redundans i 190+ länder, håller enheter uppkopplade överallt.',
    'what.pillar.outageProtection': 'Avbrottsskydd',
    'what.pillar.outageProtection.detail': 'Patenterad reservteknik med separata hårdvarukärnor som byter omedelbart vid fel.',
    'what.pillar.dashboardAPI': 'Instrumentpanel & API',
    'what.pillar.dashboardAPI.detail': 'Fullständig flottehantering med realtidsövervakning, användningsanalys och ett kraftfullt REST API.',
    'what.stat.customers': 'Kunder',
    'what.stat.countries': 'Länder',
    'what.stat.carriers': 'Operatörer',
    'what.stat.uptime': 'Drifttid',

    // ─── Slide 3: The Problem ──────────────────────────────────────────────────
    'problem1.eyebrow': 'Problemet med de flesta anslutningstjänster',
    'problem1.headline': 'De flesta anslutningstjänster är en belastning, inte en tillgång.',
    'problem1.card1.title': 'Opålitlig anslutning',
    'problem1.card1.items': 'Frekventa avbrott|Ojämn täckning|Låg genomströmning|Hög latens|Beroende av en enda operatör',
    'problem1.card2.title': 'Komplicerade arbetsflöden',
    'problem1.card2.items': 'Flera operatörsrelationer|Långsamma manuella processer|Felsökning på flera plattformar|Regionala efterlevnadskrav|Fragmenterad rapportering och fakturering',
    'problem1.card3.title': 'Frustrerande mjukvara',
    'problem1.card3.items': 'Ingen insyn i enhetshälsa|Begränsat eller obefintligt API|Ingen tydlig rotorsaksanalys|Klumpiga gränssnitt|Kan inte integreras med befintliga system',

    // ─── Slide 4: Business Risk ────────────────────────────────────────────────
    'problem2.eyebrow': 'Problemet med de flesta anslutningstjänster',
    'problem2.headline': 'Skyddar din leverantör din intäkt, eller riskerar den den?',
    'problem2.risk1': 'Varje minuts driftstopp innebär förlorade transaktioner, saknad data och missnöjda kunder.',
    'problem2.risk2': 'Långsam marknadsintroduktion fördröjer intäkterna när enheter väntar i lager istället för att generera värde.',
    'problem2.risk3': 'Ineffektiv verksamhet dränerar resurser som kunde investeras i tillväxt.',
    'problem2.risk4': 'Kundavhopp ökar när anslutningsproblem urholkar förtroendet för din produkt.',

    // ─── Slide 5: ROI ──────────────────────────────────────────────────────────
    'roi.eyebrow': 'Hur skiljer sig Hologram?',
    'roi.headline': 'Vem som helst kan sälja dig ett SIM-kort. Hologram levererar mätbart ROI.',
    'roi.body': 'Från 50% lägre anslutningskostnader till garanterad drifttid som skyddar intäktsströmmar...',
    'roi.stat1.label': 'GENOMSNITTLIG MINSKNING AV ANSLUTNINGSKOSTNADER',
    'roi.stat2.label': 'HISTORISK DRIFTTID, 99.95% GARANTERAT AV SLA',
    'roi.stat3.label': 'DATA ÖVERFÖRD DAGLIGEN',
    'roi.stat4.label': 'FÖRETAG LITAR PÅ HOLOGRAM',
    'roi.quote1': 'ROI med Hologram har varit exceptionellt. Vi kunde halvera våra IoT-fakturor.',
    'roi.quote2': 'Flexibiliteten som Hologram erbjuder hjälpte oss undvika driftstopp trots avbrott hos AT&T och Verizon.',

    // ─── Slide 6: Platform ─────────────────────────────────────────────────────
    'platform.eyebrow': 'Hologram-plattform',
    'platform.headline': 'Driftsätt snabbare. Skala smartare. Anslut överallt.',
    'platform.subtitle': 'Den enda anslutningsplattformen som stoppar avbrott innan de inträffar, så att du kan fokusera på att bygga och inte felsöka.',
    'platform.feat1.title': 'Ett SIM — 190+ länder, 550+ operatörer',
    'platform.feat1.detail': 'Ett SIM som fungerar överallt. Slipp jonglera med flera operatörsrelationer.',
    'platform.feat2.title': 'Avbrottsskydd — 99.95% drifttid garanterad',
    'platform.feat2.detail': 'Multi-core SIM med automatisk reservteknik. Dina enheter förblir online.',
    'platform.feat3.title': 'Utvecklar-API — REST API älskat av devs',
    'platform.feat3.detail': 'Integrera sömlöst med dina befintliga system via vårt fullt dokumenterade REST API.',
    'platform.simLabel': 'Hyper SIM-kort',
    'platform.simDetail': 'Multi-profil eUICC med intelligent orkestrering',

    // ─── Slide 7: Hyper SIMs ───────────────────────────────────────────────────
    'hyper.eyebrow': 'Hologram-funktioner',
    'hyper.headline': 'Hyper SIMs',
    'hyper.subtitle': 'Multi-core eUICC-anslutning, omgjord',
    'hyper.feat1.title': 'Global täckning',
    'hyper.feat1.detail': 'Tillgång till 550+ operatörer i 190+ länder. Hyper SIMs ansluter automatiskt till starkaste signalen.',
    'hyper.feat2.title': 'Anpassningsbar anslutning',
    'hyper.feat2.detail': 'Byt profil automatiskt eller på begäran för att optimera kostnad, prestanda och täckning.',
    'hyper.feat3.title': 'Framtidsredo',
    'hyper.feat3.detail': 'Skicka uppdateringar OTA under hela enhetens livscykel. Inget mer SIM-byte.',
    'hyper.feat4.title': 'Blixtsnabb prestanda',
    'hyper.feat4.detail': 'Latens ner till 50ms för nästan omedelbar dataöverföring och sömlös drift.',

    // ─── Slide 8: Outage Protection ────────────────────────────────────────────
    'outage.eyebrow': 'Hologram-funktioner',
    'outage.headline': 'Avbrottsskydd',
    'outage.subtitle': 'Håll affärskritiska enheter online',
    'outage.feat1.title': 'Multi-core SIM med reservteknik',
    'outage.feat1.detail': 'Hologram Hyper SIMs innehåller flera kärnor — en primär kärna som ansluter till din föredragna operatörsnätverk och en reservkärna som aktiveras automatiskt om den primära drabbas av avbrott. Reservtekniken övervakar signalstyrkan i realtid och byter sömlöst, utan manuell åtgärd.',
    'outage.feat2.title': 'Branschens enda drifttidsgaranti',
    'outage.feat2.detail': '99.95% drifttid, kontraktuellt garanterat. Historisk drifttid är 99.99%. Ingen annan anslutningstjänst sätter detta på papper.',
    'outage.callout': '99.99% Historisk drifttid',
    'outage.callout.sub': '99.95% Garanterat av SLA',
    'outage.roaming': 'Roaming',
    'outage.roaming.detail': 'Delar samma fysiska kärna. Om operatören fallerar, förlorar du anslutningen.',
    'outage.fallback': 'Reserv',
    'outage.fallback.detail': 'Separata hårdvarukärnor. Primärt avbrott utlöser omedelbar byte till reserv.',
    'outage.step1': 'Primärt nätverk aktivt',
    'outage.step1.status': 'ÖVERVAKAR',
    'outage.step2': 'Reserv aktiverad omedelbart',
    'outage.step2.status': 'BYTER',

    // ─── Slide 9: Native Profiles ──────────────────────────────────────────────
    'native.eyebrow': 'Hologram-funktioner',
    'native.headline': 'Inbyggda operatörsprofiler',
    'native.subtitle': 'Direktåtkomst till operatör, inte generisk roaming',

    // ─── Slide 10: Software & API ──────────────────────────────────────────────
    'software.eyebrow': 'Hologram-funktioner',
    'software.headline': 'Kraftfull mjukvara & API',
    'software.subtitle': 'Fullständig flottevisning och kontroll',
    'software.feat1.title': 'Handlingsbara realtidsdata',
    'software.feat1.detail': 'Visualisera varje aspekt av din flottas anslutning. Heltäckande analys hjälper dig att identifiera problematiska enheter.',
    'software.feat2.title': 'Enkel enhetshantering',
    'software.feat2.detail': 'Spåra, felsök och vidta åtgärder för en eller alla dina enheter. Pausa dataanvändning och sätt datagränser.',
    'software.feat3.title': 'API älskat av utvecklare',
    'software.feat3.detail': 'Anslut enkelt och säkert dina data till befintliga applikationer via vårt REST API.',
    'software.feat4.title': 'Sömlös aktivering',
    'software.feat4.detail': 'Bara några klick och dina enheter är live — oavsett om det är en eller hundratusen.',

    // ─── Slide 11: Support ─────────────────────────────────────────────────────
    'support.eyebrow': 'Hologram-funktioner',
    'support.headline': 'Support från riktiga experter',
    'support.subtitle': 'Praktisk support från ingenjörer som löser anslutningsproblem, inte personer som vidarebefordrar ärenden.',
    'support.feat1.title': 'Dedikerade lösningsingenjörer',
    'support.feat1.detail': 'Tala direkt med ingenjörer, inte supportrepresentanter som läser från manus.',
    'support.feat2.title': 'Snabb och pålitlig respons',
    'support.feat2.detail': 'Vi erbjuder 24/7 kundsupport med garanterade SLA:er.',
    'support.feat3.title': 'Djup anslutningstexpertis',
    'support.feat3.detail': 'Våra ingenjörer har sammanlagda decennier av erfarenhet inom mobilnät, enhetshårdvara, firmware och IoT-protokoll.',
    'support.review1': 'Bytte till Hologram och har aldrig sett oss om — felfri prestanda',
    'support.review2': 'Enastående samarbete med Hologram',
    'support.review3': 'Hologram support-teamet är professionellt och kunnigt',
    'support.review4': 'Mycket lätt att arbeta med och superförlitligt',
    'support.g2': 'G2-recension',
    'support.online': 'Online',

    // ─── Slide 12: Security ────────────────────────────────────────────────────
    'security.eyebrow': 'Hologram-funktioner',
    'security.headline': 'Säkerhet i Enterpriseklass',
    'security.subtitle': 'Skydda din flotta och dina data',

    // ─── Slide 13: Globe ───────────────────────────────────────────────────────
    'globe.eyebrow': 'Hologram-nätverk',
    'globe.headline': 'Global täckning',
    'globe.headlineAccent': 'Karta',

    // ─── Slide 14: Customers ───────────────────────────────────────────────────
    'customers.eyebrow': 'Betrodd av branschledare',
    'customers.headline': 'Driver anslutning för',
    'customers.headlineAccent': '6 000+ företag',

    // ─── Slides 15–17: Case studies ────────────────────────────────────────────
    'case.eyebrow': 'Kundsuccéer',
    'case.challenge': 'Utmaning',
    'case.solution': 'Lösning',

    // ─── Slides 18–19: Capabilities ────────────────────────────────────────────
    'cap.eyebrow': 'Hur skiljer sig Hologram?',
    'cap.headline': 'Hologram är designat för behovet hos',
    'cap.headlineAccent': 'modern IoT',
    'cap.headlineSuffix': 'enheter och team.',
    'cap.protect': 'Skydda',
    'cap.deploy': 'Driftsätt',
    'cap.manage': 'Hantera',
    'cap.optimize': 'Optimera',
    'cap.secure': 'Säkra',
    'cap.scale': 'Skala',
    'cap.protect.desc': 'Förebygg avbrott innan de påverkar ditt resultat med multi-core-teknik.',
    'cap.deploy.desc': 'Lansera IoT-enheter var som helst med en enda SIM-lösning som fungerar i 190+ länder.',
    'cap.manage.desc': 'Kontrollera din verksamhet via mjukvara i enterpriseklass med realtidsöversyn.',
    'cap.optimize.desc': 'Maximera ROI och minimera kostnader med intelligenta verktyg.',
    'cap.secure.desc': 'Skydda dina enheter och data med säkerhetsfunktioner i enterpriseklass.',
    'cap.scale.desc': 'Väx din IoT-driftsättning från pilot till produktion utan att byta infrastruktur.',

    // ─── Slide 20: Supercharge ─────────────────────────────────────────────────
    'super.eyebrow': 'Anslut med Hologram',
    'super.headline': 'Superladda dina',
    'super.headlineAccent': 'IoT-operationer',

    // ─── Slide 21: Demo ────────────────────────────────────────────────────────
    'demo.eyebrow': 'Se det i handling',
    'demo.headline': 'Upplev Hologram',
    'demo.headlineAccent': 'på nära håll',
    'demo.body': 'Utforska Hologram-plattformen med vår interaktiva demo. Se hur enkelt det är att hantera globala IoT-driftsättningar.',

    // ─── Slide 22: Tailored ────────────────────────────────────────────────────
    'tailored.eyebrow': 'Varför Hologram',
    'tailored.headlinePersonalized': 'Den rätta partnern för',
    'tailored.headlineDefault': 'Allt du behöver.',
    'tailored.headlineDefaultAccent': 'Inget du inte behöver.',
    'tailored.body': 'Vi bygger en anslutningsplan optimerad för din specifika driftsättning — från täckning till kostnad till support.',
    'tailored.cta': 'Låt oss bygga din plan →',

    // ─── Slide 23: Calculator ──────────────────────────────────────────────────
    'calc.eyebrow': 'Transparent prissättning',
    'calc.headline': 'Pris',
    'calc.headlineAccent': 'Kalkylator',

    // ─── Slide 24: Contact ─────────────────────────────────────────────────────
    'contact.eyebrow': 'Anslut med Hologram',
    'contact.headline': 'Håll dig',
    'contact.headlineAccent': 'uppkopplad',
    'contact.cta': 'Kom igång →',
}

const de: typeof en = {
    // ─── Nav / UI ───────────────────────────────────────────────────────────────
    'nav.edit': '+ BEARBEITEN',
    'nav.toc': 'INHALTSVERZEICHNIS',
    'nav.skip': 'Überspringen',
    'nav.startPresentation': 'Präsentation starten',

    // ─── Slide labels (TOC) ────────────────────────────────────────────────────
    'slide.cover': 'Titelfolie',
    'slide.whatIsHologram': 'Was ist Hologram?',
    'slide.theProblem': 'Das Problem',
    'slide.businessRisk': 'Geschäftsrisiko',
    'slide.roi': 'Messbarer ROI',
    'slide.platform': 'Hologram-Plattform',
    'slide.hyperSIMs': 'Hyper SIMs',
    'slide.outageProtection': 'Ausfallschutz',
    'slide.nativeProfiles': 'Native Profile',
    'slide.softwareAPI': 'Software & API',
    'slide.support': 'Experten-Support',
    'slide.security': 'Sicherheit',
    'slide.globalCoverage': 'Globale Abdeckung',
    'slide.customers': 'Kunden',
    'slide.verkada': 'Verkada',
    'slide.farmersFridge': "Farmer's Fridge",
    'slide.sundayPower': 'Sunday Power',
    'slide.capabilities1': 'Schützen/Einsetzen/Verwalten',
    'slide.capabilities2': 'Optimieren/Sichern/Skalieren',
    'slide.supercharge': 'IoT Antrieb',
    'slide.demo': 'Produkt-Demo',
    'slide.tailored': 'Maßgeschneiderter Plan',
    'slide.calculator': 'Preisrechner',
    'slide.contact': 'In Verbindung bleiben',

    // ─── Personalization modal ─────────────────────────────────────────────────
    'modal.title': 'Diese Präsentation personalisieren',
    'modal.companyName': 'Unternehmensname',
    'modal.companyPlaceholder': 'Name des Interessenten-Unternehmens',
    'modal.aeName': 'Ihr Name (AE)',
    'modal.aeNamePlaceholder': 'Account Executive Name',
    'modal.aeEmail': 'Ihre E-Mail',
    'modal.aeEmailPlaceholder': 'ihre.email@hologram.io',
    'modal.aePhone': 'Ihr Telefon',
    'modal.aePhonePlaceholder': '+1 (555) 123-4567',

    // ─── Slide 1: Cover ────────────────────────────────────────────────────────
    'cover.outage': 'Ausfall',
    'cover.proof': 'Sicher',
    'cover.line2': 'Mobilfunk-Konnektivität',
    'cover.line3': 'Die einfach funktioniert.',
    'cover.subtitle': 'Die einzige IoT-Konnektivitätsplattform, die Ausfälle verhindert, bevor sie passieren',
    'cover.preparedFor': 'Exklusiv vorbereitet für',

    // ─── Slide 2: What is Hologram? ────────────────────────────────────────────
    'what.eyebrow': 'Was ist Hologram?',
    'what.headline': 'Ausfallsichere Mobilfunk-Konnektivität',
    'what.headlineAccent': 'für IoT',
    'what.body': 'Die einzige End-to-End IoT-Konnektivitätsplattform, die Ausfälle verhindert, bevor sie beginnen — damit Sie Geräte weltweit mit einer Zuverlässigkeit einsetzen, verwalten und skalieren können, die Ihr Geschäftsergebnis schützt.',
    'what.pillar.hyperSIMs': 'Hyper SIMs',
    'what.pillar.hyperSIMs.detail': 'Multi-Core eUICC SIMs mit On-Demand-Profilwechsel und integrierter Fallback-Technologie.',
    'what.pillar.globalCoverage': 'Globale Abdeckung',
    'what.pillar.globalCoverage.detail': 'Multi-Carrier-Redundanz in 190+ Ländern, hält Geräte überall verbunden.',
    'what.pillar.outageProtection': 'Ausfallschutz',
    'what.pillar.outageProtection.detail': 'Patentierte Fallback-Technologie mit separaten Hardware-Kernen, die bei Ausfall sofort umschalten.',
    'what.pillar.dashboardAPI': 'Dashboard & API',
    'what.pillar.dashboardAPI.detail': 'Vollständiges Flottenmanagement mit Echtzeit-Monitoring, Nutzungsanalysen und einer leistungsstarken REST API.',
    'what.stat.customers': 'Kunden',
    'what.stat.countries': 'Länder',
    'what.stat.carriers': 'Netzbetreiber',
    'what.stat.uptime': 'Verfügbarkeit',

    // ─── Slide 3: The Problem ──────────────────────────────────────────────────
    'problem1.eyebrow': 'Das Problem mit den meisten Konnektivitätsanbietern',
    'problem1.headline': 'Die meisten Konnektivitätsanbieter sind eine Haftung, kein Vorteil.',
    'problem1.card1.title': 'Unzuverlässige Konnektivität',
    'problem1.card1.items': 'Häufige Ausfälle|Lückenhafte Abdeckung|Geringe Durchsatzrate|Hohe Latenz|Abhängigkeit von einem einzelnen Carrier',
    'problem1.card2.title': 'Komplizierte Arbeitsabläufe',
    'problem1.card2.items': 'Mehrere Carrier-Beziehungen|Langsame manuelle Prozesse|Fehlersuche über mehrere Plattformen|Regionale Compliance-Anforderungen|Fragmentierte Berichte und Abrechnung',
    'problem1.card3.title': 'Frustrierende Software',
    'problem1.card3.items': 'Keine Transparenz beim Gerätezustand|Begrenzte oder keine APIs|Keine klare Ursachenanalyse|Unübersichtliche Oberflächen|Keine Integration mit bestehenden Systemen',

    // ─── Slide 4: Business Risk ────────────────────────────────────────────────
    'problem2.eyebrow': 'Das Problem mit den meisten Konnektivitätsanbietern',
    'problem2.headline': 'Schützt Ihr Anbieter Ihren Umsatz oder gefährdet er ihn?',
    'problem2.risk1': 'Jede Minute Ausfallzeit bedeutet verlorene Transaktionen, fehlende Daten und unzufriedene Kunden.',
    'problem2.risk2': 'Langsame Markteinführung verzögert Einnahmen, während Geräte in Lagern warten statt Wert zu generieren.',
    'problem2.risk3': 'Ineffizienter Betrieb beansprucht Ressourcen, die in Wachstum investiert werden könnten.',
    'problem2.risk4': 'Die Kundenabwanderung steigt, wenn Konnektivitätsprobleme das Vertrauen in Ihr Produkt untergraben.',

    // ─── Slide 5: ROI ──────────────────────────────────────────────────────────
    'roi.eyebrow': 'Was macht Hologram anders?',
    'roi.headline': 'Jeder kann Ihnen eine SIM-Karte verkaufen. Hologram liefert messbaren ROI.',
    'roi.body': 'Von 50% Reduzierung der Konnektivitätskosten bis zu garantierter Verfügbarkeit, die Einnahmequellen schützt...',
    'roi.stat1.label': 'DURCHSCHNITTLICHE REDUZIERUNG DER KONNEKTIVITÄTSKOSTEN',
    'roi.stat2.label': 'HISTORISCHE VERFÜGBARKEIT, 99,95% SLA-GARANTIERT',
    'roi.stat3.label': 'TÄGLICH ÜBERTRAGENE DATEN',
    'roi.stat4.label': 'UNTERNEHMEN VERTRAUEN HOLOGRAM',
    'roi.quote1': 'Der ROI mit Hologram war außergewöhnlich. Wir konnten unsere IoT-Rechnungen halbieren.',
    'roi.quote2': 'Die Flexibilität von Hologram half uns, Ausfallzeiten trotz AT&T- und Verizon-Störungen zu vermeiden.',

    // ─── Slide 6: Platform ─────────────────────────────────────────────────────
    'platform.eyebrow': 'Hologram-Plattform',
    'platform.headline': 'Schneller einsetzen. Intelligenter skalieren. Überall verbinden.',
    'platform.subtitle': 'Die einzige Konnektivitätsplattform, die Ausfälle verhindert, bevor sie passieren, damit Sie sich aufs Bauen konzentrieren können statt auf Fehlersuche.',
    'platform.feat1.title': 'Eine SIM — 190+ Länder, 550+ Netzbetreiber',
    'platform.feat1.detail': 'Eine SIM, die überall funktioniert. Kein Jonglieren mit mehreren Carrier-Beziehungen.',
    'platform.feat2.title': 'Ausfallschutz — 99,95% Verfügbarkeit garantiert',
    'platform.feat2.detail': 'Multi-Core SIMs mit automatischer Fallback-Technologie. Ihre Geräte bleiben online.',
    'platform.feat3.title': 'Entwickler-API — Von Devs geliebte REST API',
    'platform.feat3.detail': 'Integrieren Sie nahtlos mit Ihren bestehenden Systemen über unsere vollständig dokumentierte REST API.',
    'platform.simLabel': 'Hyper SIM-Karte',
    'platform.simDetail': 'Multi-Profil eUICC mit intelligenter Orchestrierung',

    // ─── Slide 7: Hyper SIMs ───────────────────────────────────────────────────
    'hyper.eyebrow': 'Hologram-Funktionen',
    'hyper.headline': 'Hyper SIMs',
    'hyper.subtitle': 'Multi-Core eUICC-Konnektivität, neu gedacht',
    'hyper.feat1.title': 'Globale Abdeckung',
    'hyper.feat1.detail': 'Zugang zu 550+ Netzbetreibern in 190+ Ländern. Hyper SIMs verbinden sich automatisch mit dem stärksten Signal.',
    'hyper.feat2.title': 'Anpassbare Konnektivität',
    'hyper.feat2.detail': 'Profile automatisch oder auf Abruf wechseln, um Kosten, Leistung und Abdeckung zu optimieren.',
    'hyper.feat3.title': 'Zukunftssicher',
    'hyper.feat3.detail': 'Updates OTA während des gesamten Gerätelebenszyklus einspielen. Kein SIM-Wechsel mehr.',
    'hyper.feat4.title': 'Blitzschnelle Leistung',
    'hyper.feat4.detail': 'Latenz bis zu 50ms für nahezu sofortige Datenübertragung und reibungslosen Betrieb.',

    // ─── Slide 8: Outage Protection ────────────────────────────────────────────
    'outage.eyebrow': 'Hologram-Funktionen',
    'outage.headline': 'Ausfallschutz',
    'outage.subtitle': 'Geschäftskritische Geräte online halten',
    'outage.feat1.title': 'Multi-Core SIMs mit Fallback-Technologie',
    'outage.feat1.detail': 'Hologram Hyper SIMs enthalten mehrere Kerne — einen primären Kern, der sich mit Ihrem bevorzugten Carrier-Netzwerk verbindet, und einen Backup-Kern, der sich automatisch aktiviert, wenn der primäre einen Ausfall erlebt. Die Fallback-Technologie überwacht die Signalqualität in Echtzeit und wechselt nahtlos, ohne manuellen Eingriff.',
    'outage.feat2.title': 'Die einzige Verfügbarkeitsgarantie der Branche',
    'outage.feat2.detail': '99,95% Verfügbarkeit, vertraglich garantiert. Die historische Verfügbarkeit beträgt 99,99%. Kein anderer Konnektivitätsanbieter schreibt das schriftlich fest.',
    'outage.callout': '99,99% Historische Verfügbarkeit',
    'outage.callout.sub': '99,95% SLA-Garantiert',
    'outage.roaming': 'Roaming',
    'outage.roaming.detail': 'Teilt denselben physischen Kern. Wenn der Carrier ausfällt, sind Sie offline.',
    'outage.fallback': 'Fallback',
    'outage.fallback.detail': 'Separate Hardware-Kerne. Ein primärer Ausfall löst sofortigen Wechsel zum Backup aus.',
    'outage.step1': 'Primärnetzwerk aktiv',
    'outage.step1.status': 'ÜBERWACHT',
    'outage.step2': 'Fallback sofort aktiviert',
    'outage.step2.status': 'WECHSELT',

    // ─── Slide 9: Native Profiles ──────────────────────────────────────────────
    'native.eyebrow': 'Hologram-Funktionen',
    'native.headline': 'Native Carrier-Profile',
    'native.subtitle': 'Direkter Carrier-Zugang, kein generisches Roaming',

    // ─── Slide 10: Software & API ──────────────────────────────────────────────
    'software.eyebrow': 'Hologram-Funktionen',
    'software.headline': 'Leistungsstarke Software & API',
    'software.subtitle': 'Vollständige Flottensicht und -kontrolle',
    'software.feat1.title': 'Handlungsrelevante Echtzeit-Informationen',
    'software.feat1.detail': 'Visualisieren Sie jeden Aspekt der Konnektivität Ihrer Flotte. Umfassende Analysen helfen Ihnen, problematische Geräte zu identifizieren.',
    'software.feat2.title': 'Einfaches Gerätemanagement',
    'software.feat2.detail': 'Verfolgen, beheben und handeln Sie bei einem oder allen Ihren Geräten. Datennutzung pausieren und Datenlimits setzen.',
    'software.feat3.title': 'Von Entwicklern geliebte API',
    'software.feat3.detail': 'Verbinden Sie Ihre Daten einfach und sicher mit bestehenden Anwendungen über unsere REST API.',
    'software.feat4.title': 'Nahtlose Aktivierung',
    'software.feat4.detail': 'Nur wenige Klicks und Ihre Geräte sind live — ob eines oder hunderttausend.',

    // ─── Slide 11: Support ─────────────────────────────────────────────────────
    'support.eyebrow': 'Hologram-Funktionen',
    'support.headline': 'Support von echten Experten',
    'support.subtitle': 'Praxisnaher Support von Ingenieuren, die Konnektivitätsprobleme lösen, nicht von Personen, die Tickets weiterleiten.',
    'support.feat1.title': 'Dedizierte Solutions Engineers',
    'support.feat1.detail': 'Sprechen Sie direkt mit Ingenieuren, nicht mit Support-Mitarbeitern, die von Skripten lesen.',
    'support.feat2.title': 'Schnelle, zuverlässige Reaktion',
    'support.feat2.detail': 'Wir bieten 24/7 Kundensupport mit garantierten SLAs.',
    'support.feat3.title': 'Tiefgehende Konnektivitäts-Expertise',
    'support.feat3.detail': 'Unsere Ingenieure verfügen über jahrzehntelange kombinierte Erfahrung in Mobilfunknetzen, Gerätehardware, Firmware und IoT-Protokollen.',
    'support.review1': 'Zu Hologram gewechselt und nie zurückgeschaut – makellose Leistung',
    'support.review2': 'Außergewöhnliche Zusammenarbeit mit Hologram',
    'support.review3': 'Das Hologram Support-Team ist professionell und kompetent',
    'support.review4': 'Sehr einfach zu arbeiten und absolut zuverlässig',
    'support.g2': 'G2-Bewertung',
    'support.online': 'Online',

    // ─── Slide 12: Security ────────────────────────────────────────────────────
    'security.eyebrow': 'Hologram-Funktionen',
    'security.headline': 'Unternehmenssicherheit auf höchstem Niveau',
    'security.subtitle': 'Schützen Sie Ihre Flotte und Ihre Daten',

    // ─── Slide 13: Globe ───────────────────────────────────────────────────────
    'globe.eyebrow': 'Hologram-Netzwerk',
    'globe.headline': 'Globale Abdeckung',
    'globe.headlineAccent': 'Karte',

    // ─── Slide 14: Customers ───────────────────────────────────────────────────
    'customers.eyebrow': 'Von Branchenführern vertraut',
    'customers.headline': 'Konnektivität für',
    'customers.headlineAccent': '6.000+ Unternehmen',

    // ─── Slides 15–17: Case studies ────────────────────────────────────────────
    'case.eyebrow': 'Kundenerfolge',
    'case.challenge': 'Herausforderung',
    'case.solution': 'Lösung',

    // ─── Slides 18–19: Capabilities ────────────────────────────────────────────
    'cap.eyebrow': 'Was macht Hologram anders?',
    'cap.headline': 'Hologram ist für die Anforderungen von',
    'cap.headlineAccent': 'modernem IoT',
    'cap.headlineSuffix': 'Geräten und Teams entwickelt.',
    'cap.protect': 'Schützen',
    'cap.deploy': 'Einsetzen',
    'cap.manage': 'Verwalten',
    'cap.optimize': 'Optimieren',
    'cap.secure': 'Sichern',
    'cap.scale': 'Skalieren',
    'cap.protect.desc': 'Ausfälle verhindern, bevor sie Ihr Ergebnis beeinflussen, mit Multi-Core-Technologie.',
    'cap.deploy.desc': 'IoT-Geräte überall einsetzen mit einer einzigen SIM-Lösung, die in 190+ Ländern funktioniert.',
    'cap.manage.desc': 'Betrieb über Enterprise-Software mit Echtzeit-Transparenz steuern.',
    'cap.optimize.desc': 'ROI maximieren und Kosten mit intelligenten Tools minimieren.',
    'cap.secure.desc': 'Geräte und Daten mit Enterprise-Sicherheitsfunktionen schützen.',
    'cap.scale.desc': 'IoT-Einsatz vom Piloten bis zur Produktion skalieren ohne Infrastrukturwechsel.',

    // ─── Slide 20: Supercharge ─────────────────────────────────────────────────
    'super.eyebrow': 'Mit Hologram verbinden',
    'super.headline': 'Laden Sie Ihre',
    'super.headlineAccent': 'IoT-Operationen auf',

    // ─── Slide 21: Demo ────────────────────────────────────────────────────────
    'demo.eyebrow': 'Sehen Sie es in Aktion',
    'demo.headline': 'Erleben Sie Hologram',
    'demo.headlineAccent': 'aus erster Hand',
    'demo.body': 'Entdecken Sie die Hologram-Plattform mit unserer interaktiven Demo. Sehen Sie, wie einfach globale IoT-Einsätze verwaltet werden können.',

    // ─── Slide 22: Tailored ────────────────────────────────────────────────────
    'tailored.eyebrow': 'Warum Hologram',
    'tailored.headlinePersonalized': 'Der richtige Partner für',
    'tailored.headlineDefault': 'Alles, was Sie brauchen.',
    'tailored.headlineDefaultAccent': 'Nichts, was Sie nicht brauchen.',
    'tailored.body': 'Wir erstellen einen Konnektivitätsplan, der für Ihren spezifischen Einsatz optimiert ist — von Abdeckung über Kosten bis Support.',
    'tailored.cta': 'Lassen Sie uns Ihren Plan erstellen →',

    // ─── Slide 23: Calculator ──────────────────────────────────────────────────
    'calc.eyebrow': 'Transparente Preisgestaltung',
    'calc.headline': 'Preis',
    'calc.headlineAccent': 'Rechner',

    // ─── Slide 24: Contact ─────────────────────────────────────────────────────
    'contact.eyebrow': 'Mit Hologram verbinden',
    'contact.headline': 'Verbunden',
    'contact.headlineAccent': 'bleiben',
    'contact.cta': 'Jetzt starten →',
}

export const translations: Record<Language, typeof en> = { en, es, it, sv, de }
