export enum TransformationStage {
    Initializing = 'Initializing',
    Preparing = 'Preparing',
    DeadCodeInjection = 'DeadCodeInjection',
    ControlFlowFlattening = 'ControlFlowFlattening',
    Converting = 'Converting',
    Obfuscating = 'Obfuscating',
    Finalizing = 'Finalizing'
}
