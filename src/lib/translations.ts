export type Language = 'en' | 'es'

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

export const translations: Record<Language, typeof en> = { en, es }
