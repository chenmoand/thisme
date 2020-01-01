package com.brageast.cli.exception

/**
 * 泛型猜出 out in
 * 我真TM是个小机灵鬼
 *
 */
class AnnotationNotfoundException : Exception {
    constructor(instanceClass: Class<*>, ann: Class<out Annotation>) : super("未找到[${instanceClass.canonicalName}]上的[${ann.canonicalName}]注解")
}
